using Phonebook.Models;
using Phonebook.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Phonebook.Services
{
    public class RepositoryService
    {
        private readonly IEnumerable<IDataProvider> _providers;

        public RepositoryService(IEnumerable<IDataProvider> providers)
        {
            _providers = providers;
        }

        public IEnumerable<Entity> List()
        {
            IEnumerable<Entity> accu = new List<Entity>();
            foreach (IDataProvider element in _providers)
            {
                accu = accu.Concat(element.List());
            }
            return accu;
        }

        public IEnumerable<Entity> Search(string text)
        {
            IEnumerable<Entity> accu = new List<Entity>();
            foreach (IDataProvider element in _providers)
            {
                accu = accu.Concat(element.Search(text));
            }
            return accu;
        }
    }
}
