using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    public class DetailController : Controller
    {
      /*
        [HttpGet]
        public IEnumerable<string> Get()
        {
          return new string[] { "The","Details","Controller","List" };
        }
        */
        [HttpPost()]
        public bool Post([FromBody]Person person)
        {
          
          Random rnd = new Random();
          int month = rnd.Next(1, 10);
          person.Id = month;
          Console.WriteLine("p-> " + person.Id + "->" +person.Name + "->" + person.Surname + "->" + person.Age);
          DB.GetConnection();
          bool result = DB.AddPerson(person);
          
          return result;
      
        }
   
    }
}
