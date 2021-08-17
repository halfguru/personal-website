using System;

namespace personal_website.Models
{
    public class Address
    {
        public string City { get; set; }
        public string State { get; set; }
    }
    public class AboutMe
    {
        public String Name { get; set; }
        public String Bio { get; set; }
        public String Resumedownload { get; set; }
        public String image { get; set; }
        public Address Address { get; set; }
    }
}