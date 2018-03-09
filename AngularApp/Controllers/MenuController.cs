using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Person> Get()
        {
          DB.GetConnection();
          return DB.GetAllPersons();
        }
    }
}
