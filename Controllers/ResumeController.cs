using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using personal_website.Models;

namespace PersonalResume.Controllers
{
    [ApiController]
    [Route("api/resume")]
    public class ResumeController
    {
        [HttpGet]
        public Resume GetResumeInfo()
        {
            //Reads text from Header.json
            string jsonText = System.IO.File.ReadAllText("./Data/resume.json");
            //Deserializes into Header object
            return JsonConvert.DeserializeObject<Resume>(jsonText);
        }
    }
}