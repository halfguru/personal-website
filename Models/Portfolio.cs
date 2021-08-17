using System.Collections.Generic;
using System;

namespace personal_website.Models
{
    public class Projects
    {
        public String Title { get; set; }
        public String Category { get; set; }
        public String Image { get; set; }
        public String Url { get; set; }
    }
    public class Portfolio
    {
        public List<Projects> Projects { get; set; }
    }
}