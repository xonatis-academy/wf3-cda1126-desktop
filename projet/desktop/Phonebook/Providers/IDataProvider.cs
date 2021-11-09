using Phonebook.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Phonebook.Providers
{
    public interface IDataProvider
    {
        IEnumerable<Entity> List();
        IEnumerable<Entity> Search(string text);
    }
}
