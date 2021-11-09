﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Phonebook.Models
{
    public class Company : Entity
    {
        public string Name { get; set; }

        public Company(int id, string name) : base(id)
        {
            Name = name;
        }
    }
}
