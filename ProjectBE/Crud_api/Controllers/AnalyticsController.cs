using Crud_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Crud_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnalyticsController : ControllerBase
    {
        public readonly IConfiguration _config;
        public AnalyticsController(IConfiguration config)
        {
            _config = config;

        }
        [HttpGet]
        [Route("Getregisters")]
        public registerdetails Getregisters()
        {
            SqlConnection conn = new SqlConnection(_config.GetConnectionString("Default").ToString());
           
            analyticshome a = new analyticshome();
            registerdetails r=a.getregisters(conn);
            //we should write the logic of getting infomation of the registrations per day
            return r;
        }
        [HttpGet]
        [Route("Getbooks")]
        public Booksdetails Getbooks()
        {
            SqlConnection conn = new SqlConnection(_config.GetConnectionString("Default").ToString());
            
            analyticshome a = new analyticshome();
            Booksdetails b=a.getbooks(conn);
            //here you will get the info from the 
            return b;
        }
    }
}
