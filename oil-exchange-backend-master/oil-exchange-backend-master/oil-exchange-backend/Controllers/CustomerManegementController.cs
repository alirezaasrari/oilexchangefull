using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using oil_exchange_backend.Context;
using oil_exchange_backend.Models;
using oil_exchange_backend.Models.ViewModels;

namespace oil_exchange_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerManegementController : Controller
    {
        private readonly DataContext _dataContext;

        public CustomerManegementController(DataContext context)
        {
            _dataContext = context;
        }

        [HttpPost("addcustomer"), Authorize]
        public async Task<ActionResult<string>> Addcustomer(CustomerManagementDto customer)
        {
            try
            {
                CustomerManagement customerManegemant = new()
                {
                    Plaque = customer.Plaque,
                    Userid = customer.Userid,
                    Oilfilter = customer.Oilfilter,
                    Gearboxoil = customer.Gearboxoil,
                    Airfilter = customer.Airfilter,
                    Breakeoil = customer.Breakeoil,
                    Cabinfilter = customer.Cabinfilter,
                    Engineoil = customer.Engineoil,
                    Previouskilometer = customer.Previouskilometer,
                    Nextkilometer = customer.Nextkilometer,
                    Petrolfilter = customer.Petrolfilter,
                    Untifreez = customer.Untifreez,
                    Hydraulicoil = customer.Hydraulicoil
                };
                _dataContext.Customermanagement.Add(customerManegemant);
                await _dataContext.SaveChangesAsync();
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
                }
            }
        }

        [HttpGet("getcustomers"), Authorize]
        public async Task<ActionResult<List<CustomerManagement>>> Getcustomers(int userid)
        {
            try
            {
                var Customers = await _dataContext.Customermanagement.Where(req => req.Userid == userid).ToListAsync();
                return Ok(Customers);
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
                }
            }
            
        }
    }
    }
