using System;
using System.Collections.Generic;
using System.Text;
using Phonebook.Models;

namespace Phonebook.Providers
{
    public class CompanyProvider : BaseProvider
    {
        protected override IEnumerable<Entity> GetData()
        {
            Entity c1 = new Company(1, "Google");
            Entity c2 = new Company(2, "Apple");
            Entity c3 = new Company(3, "Microsoft");

            return new List<Entity>() { c1, c2, c3 };
        }
    }
}
