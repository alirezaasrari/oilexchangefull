using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using oil_exchange_backend.Context;
using oil_exchange_backend.Models;
using oil_exchange_backend.Models.ViewModels;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;

namespace oil_exchange_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly DataContext _Context;
        public AuthController(DataContext Context)
        {
            _Context = Context;
        }
        
        [HttpPost("register")]
        public async Task<ActionResult<RegisterUser>> Register(RegisterUserDto request)
        {
            try
            {
                if(_Context.Users.Any(res => res.Phonenumber == request.Phonenumber))
                {
                    return BadRequest("user already exist");
                }
                CreatePasswordHash(request.Pass, out byte[] passwordHash, out byte[] passwordSalt);
                RegisterUser user = new()
                {
                    Storename = request.Storename,
                    Phonenumber = request.Phonenumber,
                    Registereddate = DateTime.Now,
                    PassHash = passwordHash,
                    PassSalt = passwordSalt
                };
                _Context.Users.Add(user);
                await _Context.SaveChangesAsync();
                return Ok(user);
            }
            catch (Exception ex)
            {

                var ineerexception = ex.InnerException;
                if (ineerexception != null)
                {
                    return BadRequest(ineerexception.Message);
                }
                else
                {
                    return BadRequest("bad request");
                };
            }
        }
        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(LoginUser request)
        {
            var user = await _Context.Users.FirstOrDefaultAsync(res => res.Phonenumber == request.Phonenumber);
            try
            {                
                    if (user is null)
                    {
                        return BadRequest("User Not found!");
                    }
                    else if (user is not null)
                    { 
                            byte[] Hash = user.PassHash;
                            byte[] Salt = user.PassSalt;

                            if (!VerifyPasswordHash(request.Pass, Hash, Salt))
                            {
                                return BadRequest("password is wrong");
                            }
                    var token = Createtoken(user);
                    await _Context.SaveChangesAsync();
                    return Ok(token);
                }
                return BadRequest("some error exist");
            }
            catch (Exception ex)
            {

                var ineerexception = ex.InnerException;
                if (ineerexception != null)
                {
                    return BadRequest(ineerexception.Message);
                }
                else
                {
                    return BadRequest("bad request");
                };
            }
         
        }

        [HttpPost("forget-password")]
        public async Task<ActionResult<string>> ForgetPassword(string phone)
        {
            var user = await _Context.Users.FirstOrDefaultAsync(u => u.Phonenumber == phone);
            try
            {
                if (user == null)
                {
                    return BadRequest("user not found!");
                }
                var Resetpasstoken = CreateRandomToken();
                user.Resetpasstoken = Resetpasstoken;
                user.Resetpasstokenexpire = DateTime.Now.AddDays(1);
                await _Context.SaveChangesAsync();
                return Ok(Resetpasstoken);
            }
            catch (Exception ex)
            {

                var ineerexception = ex.InnerException;
                if (ineerexception != null)
                {
                    return BadRequest(ineerexception.Message);
                }
                else
                {
                    return BadRequest("bad request");
                };
            }
            
        }

        [HttpPost("Reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPass request)
        {
            var user = await _Context.Users.FirstOrDefaultAsync(u => u.Resetpasstoken == request.Token);
            try
            {  
                if (user == null || user.Resetpasstokenexpire < DateTime.Now)
                {
                    return BadRequest("invalid token");
                }
                    CreatePasswordHash(request.Pass, out byte[] passwordHash, out byte[] passwordSalt);
                    user.PassHash = passwordHash;
                    user.PassSalt = passwordSalt;
                    user.Resetpasstoken = null;
                    user.Resetpasstokenexpire = null;
                    await _Context.SaveChangesAsync();               
                    return Ok();
            }
            catch (Exception ex)
            {

                var ineerexception = ex.InnerException;
                if (ineerexception != null)
                {
                    return BadRequest(ineerexception.Message);
                }
                else
                {
                    return BadRequest("bad request");
                };
            }
            
        }

        private static string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }
        private static string Createtoken(RegisterUser request)
        {
                    List<Claim> claims = new()
                    {
                       new Claim (ClaimTypes.Name, request.Id.ToString()),
                       new Claim (ClaimTypes.Role, "admin"),
                    };
                    var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("hello hayat shargh"));
                    var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
                    var token = new JwtSecurityToken(
                        claims: claims,
                        expires: DateTime.Now.AddDays(1),
                        signingCredentials: cred
                        );
                    var jwt = new JwtSecurityTokenHandler().WriteToken(token);
                    return jwt;
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512();
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
        }
        private static bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using var hmac = new HMACSHA512(passwordSalt);
            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(passwordHash);
        }

    }
}
