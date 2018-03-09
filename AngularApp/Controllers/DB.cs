using System.Collections.Generic;
using System.Dynamic;
using System.Linq;

namespace AngularApp.Controllers
{
  public class Person
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public int Age { get; set; }

    public Person()
    {

    }

    public Person(int idd, string namee, string surnamee, int agee)
    {
      Id = idd;
      Name = namee;
      Surname = surnamee;
      Age = agee;
    }

  }
  public class DB
  {
    private static List<Person> PersonList;

    public static void GetConnection()
    {
      if (PersonList == null)
      {
        CreateDB();
      }
    }
    private static void CreateDB()
    {
      PersonList = new List<Person>();
      PersonList.Add(new Person(100, "Alex", "Pizaro", 10));
      PersonList.Add(new Person(200, "John", "Test", 20));
      PersonList.Add(new Person(300, "Victor", "Blaz", 30));
      PersonList.Add(new Person(400, "Preet", "Singh", 40));
      PersonList.Add(new Person(500, "Maria", "Fernandez", 50));
      PersonList.Add(new Person(600, "Jordi", "Contador", 60));
    }
    public static List<Person> GetAllPersons()
    {
      return PersonList;
    }

    public static bool AddPerson(Person p)
    {
      PersonList.Add(new Person(p.Id, p.Name, p.Surname, p.Age));

      if (PersonList.Select(o => o.Name.Equals(p.Name) && o.Surname.Equals(p.Surname) && o.Age.Equals(p.Age)) != null)
      {
        return true;
      }else { 
        return false;
      }
    }

    public static bool DeletePerson(Person p)
    {
      return PersonList.Remove(new Person(p.Id, p.Name, p.Surname, p.Age));
    }
  }
}
