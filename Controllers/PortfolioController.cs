using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using personal_website.Models;

namespace PersonalResume.Controllers
{
    [ApiController]
    [Route("api/portfolio")]
    public class PortfolioController
    {
        [HttpGet]
        public Portfolio GetPortfolioInfo()
        {
            //Reads text from about.json
            string jsonText = System.IO.File.ReadAllText("./Data/portfolio.json");
            //Deserializes into About object
            return JsonConvert.DeserializeObject<Portfolio>(jsonText);
        }
    }
}