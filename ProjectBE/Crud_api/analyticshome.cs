using Crud_api.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Crud_api
{
    public class analyticshome
    {
        public registerdetails getregisters(SqlConnection connection)
        { 
            registerdetails rd = new registerdetails();
            string query = "select Createdon as registereddate,count(Createdon) as noofusers from Users Group by Createdon order by Createdon asc";
            SqlDataAdapter adp = new SqlDataAdapter(query, connection);
            adp.SelectCommand.CommandType = CommandType.Text;
            //here temporary storing data iam creating lists of string and int
            List<string> t1 = new List<string>();
            List<int> t2 = new List<int>();
            DataTable dt = new DataTable();
            adp.Fill(dt);
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                var temp1 = Convert.ToString(dt.Rows[i]["registereddate"]);
                var temp2 = Convert.ToInt32(dt.Rows[i]["noofusers"]);
                t1.Add(temp1);
                t2.Add(temp2);
            }
            rd.loggeddatearray = t1;
            rd.noofpersonsarray = t2;
            return rd;
        }
        public Booksdetails getbooks(SqlConnection connection)
        {
            Booksdetails bd = new Booksdetails();
            string query = "select booktype,noofbook from Books";
            SqlDataAdapter adp = new SqlDataAdapter(query,connection);
            adp.SelectCommand.CommandType = CommandType.Text;
            DataTable dt = new DataTable();
            //similarly Iam creating the temporary objects for list of strings and int
            List<string> t1 = new List<string>();
            List<int> t2 = new List<int>();
            adp.Fill(dt);
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                var temp1 = Convert.ToString(dt.Rows[i]["booktype"]);
                var temp2 = Convert.ToInt32(dt.Rows[i]["noofbook"]);
                t1.Add(temp1);
                t2.Add(temp2);
            }
            bd.booktypearray = t1;
            bd.noofbooksarray = t2;
            return bd;
        }
    }
}
