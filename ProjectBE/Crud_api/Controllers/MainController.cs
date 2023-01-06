using Crud_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Crud_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    { private readonly IConfiguration _config;
        public MainController(IConfiguration config)
        {
            _config = config;
        }
        [HttpGet]
        public string demo()
        {
            return "sai";
        }
        [HttpPost]
        [Route("Login")]
        public Response Login(Logincred L)
        {
            SqlConnection conn = new SqlConnection(_config.GetConnectionString("Default").ToString());
            HomeClass Home = new HomeClass();
            Response res = Home.Login(L, conn);

            return res;
        }

        [HttpPost]
        [Route("Registration")]
        public Response Registration(Users s)
        {
            SqlConnection conn = new SqlConnection(_config.GetConnectionString("Default").ToString());
            HomeClass Home = new HomeClass();
            Response res = Home.Register(s, conn);
            return res;
        }
        [HttpPost]
        [Route("AddBook")]
        public string AddBook(Book b)
        {
            SqlConnection connection = new SqlConnection(_config.GetConnectionString("Default").ToString());
            HomeClass home = new HomeClass();
            var x = home.Addbook(b, connection);
            return x;
        }
        [HttpPost]
        [Route("AddingBook")]
        public string AddingBook(Book b)
        {   
            SqlConnection conn = new SqlConnection(_config.GetConnectionString("Default").ToString());
            HomeClass home = new HomeClass();
            var x = home.AddingBook(b, conn);
            return x;
        }
        [HttpGet]
        [Route("ListofBooks")]
            public List<Book> listofBooks()
        {
           
            SqlConnection connection = new SqlConnection(_config.GetConnectionString("Default").ToString());
            HomeClass home = new HomeClass();
            List<Book> lst=home.bookslst(connection);
            return lst;
        }
        [HttpDelete]
        [Route("DeleteBook")]
        public string DeleteBook(delkeys d)
        {
            SqlConnection connection = new SqlConnection(_config.GetConnectionString("default").ToString());
            HomeClass home = new HomeClass();
            var x=home.delbook(d, connection);
            return x;


        }

        

    }
}
