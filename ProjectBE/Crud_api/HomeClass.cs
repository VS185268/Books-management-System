using Crud_api.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Crud_api
{
    public class HomeClass
    {
       
        public Response Register(Users s, SqlConnection connection)
        {
            Response res = new Response();
            SqlCommand cmd = new SqlCommand("INSERT INTO Users(firstname,lastname,email,password,Createdon) VALUES(@firstname,@lastname,@email,@password,@createdon)", connection);
            cmd.CommandType = CommandType.Text;

            //cmd.Parameters.AddWithValue("@id", s.id);
            cmd.Parameters.AddWithValue("@firstname", s.firstname);
            cmd.Parameters.AddWithValue("@lastname", s.lastname);
            cmd.Parameters.AddWithValue("@email", s.email);
            cmd.Parameters.AddWithValue("@password", s.password);
            cmd.Parameters.AddWithValue("@createdon", s.Createdon);
            connection.Open();
            var i = cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                res.statuscode = 200;
                res.statusmessage = "Successfully registered";
                //res.id = s.id;
                res.firstname = s.firstname.ToString();
                res.lastname = s.lastname;
                res.email = s.email;
                res.password = s.password;

                return res;

            }
            else
            {
                res.statuscode = 400;
                res.statusmessage = "registration failed";
                return res;
            }


        }

        

        public Response Login(Logincred Lc,SqlConnection connection)
        {
            Response res = new Response();
            
            SqlDataAdapter adp = new SqlDataAdapter("select * from Users where email=@email and password=@password", connection);
            adp.SelectCommand.CommandType = CommandType.Text;
            adp.SelectCommand.Parameters.AddWithValue("@email", Lc.email);
            adp.SelectCommand.Parameters.AddWithValue("@password", Lc.password);
            DataTable dt=new DataTable();
            adp.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                //res.id = Convert.ToInt32(dt.Rows[0]["id"]);
                res.firstname = Convert.ToString(dt.Rows[0]["firstname"]);
                res.lastname = Convert.ToString(dt.Rows[0]["lastname"]);
                res.email = Convert.ToString(dt.Rows[0]["email"]);
                res.statuscode = 200;
                res.statusmessage = "User Login successful";

            }
            else
            {
                res.statuscode =100;
                res.statusmessage = "User login failed";
            }


            return res;
        }
        public string Addbook(Book b,SqlConnection connection)
        {
            string checkquery = ("select * from books where booktype=@bookname and author=@author");
            SqlDataAdapter ap = new SqlDataAdapter(checkquery, connection);
            ap.SelectCommand.CommandType = CommandType.Text;
            ap.SelectCommand.Parameters.AddWithValue("@bookname", b.booktype);
            ap.SelectCommand.Parameters.AddWithValue("@author", b.author);
            
            DataTable dt = new DataTable();
            ap.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                var change = Convert.ToInt32(dt.Rows[0]["noofbook"])+b.noofbook;
                string updatequery = ("Update Books set noofbook=@change where booktype=@bookname and author=@author");
                SqlCommand cmdup = new SqlCommand(updatequery, connection);
                cmdup.CommandType = CommandType.Text;
                cmdup.Parameters.AddWithValue("@change", change);
                cmdup.Parameters.AddWithValue("@bookname", b.booktype);
                cmdup.Parameters.AddWithValue("@author", b.author);
                connection.Open();
                cmdup.ExecuteNonQuery();
                connection.Close();

                return "Succesfully Updated the book Count";
            }
            else
            {

                string query = "INSERT INTO Books(booktype,author,noofbook,addedby) VALUES(@bookname,@author,@noofbook,@addedby)";
                SqlCommand cmd = new SqlCommand(query, connection);
                cmd.CommandType = CommandType.Text;
                //cmd.Parameters.AddWithValue("@id", b.id);
                cmd.Parameters.AddWithValue("@bookname", b.booktype);
                cmd.Parameters.AddWithValue("@author", b.author);
                cmd.Parameters.AddWithValue("@noofbook", b.noofbook);
                 cmd.Parameters.AddWithValue("@addedby", b.addedby);
                connection.Open();
                cmd.ExecuteNonQuery();
                connection.Close();


                return "Successfully added the Book";
            }
        }
        public string AddingBook(Book b,SqlConnection connection)
        {
            string query = "INSERT INTO Books(booktype,author,noofbook,addedby) VALUES(@bookname,@author,@noofbook,@addedby)";
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.CommandType = CommandType.Text;
            //cmd.Parameters.AddWithValue("@id", b.id);
            cmd.Parameters.AddWithValue("@bookname", b.booktype);
            cmd.Parameters.AddWithValue("@author", b.author);
            cmd.Parameters.AddWithValue("@noofbook", b.noofbook);
            cmd.Parameters.AddWithValue("@addedby", b.addedby);
            connection.Open();
            var i=cmd.ExecuteNonQuery();
            connection.Close();
            if (i > 0)
            {
                return "Succesfully added the Book";
            }
            else
            {
                return "Book addition is failed";
            }
            
        }
        public List<Book> bookslst(SqlConnection connection)
        {
            List<Book> lst = new List<Book>();
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM books", connection);
            DataTable dt = new DataTable();
            da.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Book b = new Book();
                   // b.id = Convert.ToInt32(dt.Rows[i]["id"]);
                    b.booktype = Convert.ToString(dt.Rows[i]["booktype"]);
                    b.author = Convert.ToString(dt.Rows[i]["author"]);
                    b.noofbook = Convert.ToInt32(dt.Rows[i]["noofbook"]);
                    b.addedby = Convert.ToString(dt.Rows[i]["addedby"]);

                    lst.Add(b);
                }
            }

            
            return lst;
        }
        public string delbook(delkeys d,SqlConnection connection)
        {
            string query = "delete from Books where bookname=@bname and author=@author";
            SqlCommand cmd = new SqlCommand(query, connection);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.AddWithValue("@bname", d.bname);
            cmd.Parameters.AddWithValue("@author", d.author);
            

            return "Successfully deleted";
        }
    }
}
