using System.Collections.Generic;

namespace personal_website.Models
{
    public class Social
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string ClassName { get; set; }
    }
    public class Header
    {
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string City { get; set; }
        public string Description { get; set; }
        public List<Social> Social { get; set; }
    }
}