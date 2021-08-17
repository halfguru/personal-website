using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using personal_website.Models;

namespace PersonalResume.Controllers
{
    [ApiController]
    [Route("api/header")]
    public class HeaderController
    {
        [HttpGet]
        public Header GetHeaderInfo()
        {
            //Reads text from Header.json
            string jsonText = System.IO.File.ReadAllText("./Data/header.json");
            //Deserializes into Header object
            return JsonConvert.DeserializeObject<Header>(jsonText);
        }
    }
}