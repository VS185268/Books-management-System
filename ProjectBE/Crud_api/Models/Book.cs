using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Crud_api.Models
{
    public class Book
    {
        
        public string booktype { get; set; }
        public string author { get; set; }
        public int noofbook { get; set; }
        public string addedby { get; set; }
    }
}
