using Phonebook.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Phonebook.Providers
{
    public abstract class BaseProvider : IDataProvider
    {
        protected abstract IEnumerable<Entity> GetData();

        public IEnumerable<Entity> List()
        {
            return GetData();
        }

        public IEnumerable<Entity> Search(string text)
        {
            string search = text.ToLower();
            List<Entity> results = new List<Entity>();
            foreach (Entity item in GetData())
            {
                if (item.ToString().ToLower().Contains(search))
                {
                    results.Add(item);
                }
            }

            return results;
        }
    }
}
