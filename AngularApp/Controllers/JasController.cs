using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Controllers
{
    [Route("api/jas")]
    public class JasController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
          return new string[] { "The","Jas","Controller" };
        }
  }
}
