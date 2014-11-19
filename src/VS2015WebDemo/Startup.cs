using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;
using VS2015WebDemo.Data;

namespace VS2015WebDemo
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            //inject all MVC dependencies
            services.AddMvc();

            //inject our data stuff
            services.AddSingleton<IStudentRepository, FakeStudentRepo>();
            services.AddSingleton<ITeacherRepository, FakeTeacherRepo>();
            services.AddSingleton<IClassRepository, FakeClassRepo>();
        }
        public void Configure(IApplicationBuilder app)
        {
            //add MVC middleware to pipeline
            app.UseMvc();
        }
    }
}
