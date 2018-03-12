using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Controllers
{
  [Route("api/[controller]")]
  public class PersonController : Controller
  {
    [HttpGet]
    public IEnumerable<Person> Get()
    {
      DB.GetConnection();
      return DB.GetAllPersons();
    }

    [HttpPost()]
    public bool Post([FromBody] Person person)
    {
      Random rnd = new Random();
      int month = rnd.Next(1, 10);
      person.Id = month;

      DB.GetConnection();
      bool result = DB.AddPerson(person);

      return result;
    }
  }
}
