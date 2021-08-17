using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using personal_website.Models;

namespace PersonalResume.Controllers
{
    [ApiController]
    [Route("api/aboutme")]
    public class AboutMeController
    {
        [HttpGet]
        public AboutMe GetAboutMeInfo()
        {
            //Reads text from about.json
            string jsonText = System.IO.File.ReadAllText("./Data/aboutme.json");
            //Deserializes into About object
            return JsonConvert.DeserializeObject<AboutMe>(jsonText);
        }
    }
}