using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Outlook.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseUrls("http://*:5000");
                    webBuilder.UseWebRoot("wwwrooot");
                    webBuilder.UseStartup<Startup>();
                });
    }
}
