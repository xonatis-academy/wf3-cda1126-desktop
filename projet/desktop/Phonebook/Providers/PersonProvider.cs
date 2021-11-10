using Phonebook.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Phonebook.Providers
{
    public class PersonProvider : BaseProvider
    {
        protected override IEnumerable<Entity> GetData()
        {
            Entity p1 = new Person(1, "Sophie", "Lozophy");
            Entity p2 = new Person(2, "Annie", "Versaire");
            Entity p3 = new Person(3, "Paul", "Ochon");

            return new List<Entity>() { p1, p2, p3 };
        }
    }
}
