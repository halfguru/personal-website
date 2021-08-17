using System.Collections.Generic;
using System;

namespace personal_website.Models
{
    public class Skills
    {
        public String Name { get; set; }
        public String Level { get; set; }
        public String Image { get; set; }
        public String Description { get; set; }
    }
    public class Work
    {
        public String Company { get; set; }
        public String Title { get; set; }
        public String Years { get; set; }
        public String[] Description { get; set; }
        public String Image { get; set; }
    }
    public class Education
    {
        public String School { get; set; }
        public String Degree { get; set; }
        public String Graduated { get; set; }
        public String Description { get; set; }
        public String Image { get; set; }
    }
    public class Resume
    {
        public String Skillmessage { get; set; }
        public List<Education> Education { get; set; }
        public List<Work> Work { get; set; }
        public List<Skills> Skills { get; set; }
    }
}