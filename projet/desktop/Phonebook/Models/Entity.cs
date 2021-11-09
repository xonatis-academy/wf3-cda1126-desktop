using System;
using System.Collections.Generic;
using System.Text;

namespace Phonebook.Models
{
    public abstract class Entity
    {
        public int Id { get; set; }

        public Entity(int id)
        {
            Id = id;
        }
    }
}
