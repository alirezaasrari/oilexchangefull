using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using oil_exchange_backend.Context;
using oil_exchange_backend.Models;

namespace oil_exchange_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryCheckController : Controller
    {
        private readonly DataContext _Context;
        public HistoryCheckController(DataContext Context)
        {
            _Context = Context;
        }
        [HttpGet("historycheck/{plaquenumber}")]
        public async Task<ActionResult<List<CustomerManagement>>> HistoryCheck(string plaquenumber)
        {
            try
            {
                var history = await _Context.Customermanagement.ToListAsync();
                var newlist = Search(history, plaquenumber);
                return Ok(newlist);
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

        private static List<CustomerManagement> Search(List<CustomerManagement> list, string num)
        {
            try
            {
                var newlist = new List<CustomerManagement>();
                foreach (CustomerManagement p in list)
                {
                    if (p.Plaque == num)
                    {
                        newlist.Add(p);
                    };
                }
                return newlist;
            }
            catch (Exception ex)
            {

                var ineerexception = ex.InnerException;
                if (ineerexception != null)
                {
                     Console.WriteLine(ineerexception.Message);
                    return new List<CustomerManagement>();
                }
                else
                {
                    Console.WriteLine("bad request");
                    return new List<CustomerManagement>();
                };
            }
            
        }
    }
}
