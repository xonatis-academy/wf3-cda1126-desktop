using System;
using System.Collections.Generic;
using System.Text;
using MySql.Data.MySqlClient;
using Phonebook.Models;

namespace Phonebook.Providers
{
    public class CompanyProvider : BaseProvider
    {
        protected override string GetTable()
        {
            return "company";
        }

        protected override Entity CreateItem(MySqlDataReader reader)
        {
            return new Company(Convert.ToInt32(reader["id"]), reader["name"].ToString());
        }
    }
}
