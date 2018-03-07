using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using AngularApp.Models;

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    public class DetailController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
          return new string[] { "The","Details","Controller","List" };
        }
        [HttpPost]
        public string Post(Person  p)
        {
          return "asdsad";
        }
  }
}
