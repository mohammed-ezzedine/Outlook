﻿using System.Threading.Tasks;
using backend.Areas.Identity;
using backend.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace backend.APIs
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentityController : ControllerBase
    {
        private readonly UserManager<OutlookUser> userManager;
        private readonly Logger.Logger logger;

        public IdentityController(UserManager<OutlookUser> userManager)
        {
            this.userManager = userManager;
            logger = Logger.Logger.Instance(Logger.Logger.LogField.web);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel registerModel) 
        {
            if (ModelState.IsValid)
            {
                var user = new OutlookUser { UserName = registerModel.Username, FirstName = registerModel.FirstName, LastName = registerModel.LastName };
                var result = await userManager.CreateAsync(user, registerModel.Password);

                logger.Log($"User {user.UserName} was created.");

                return new JsonResult(result);
            }

            return BadRequest(ModelState);
        }

        [HttpPost("ChangePassword")]
        [Authorize(AuthenticationSchemes = "Bearer")]
        public async Task<IActionResult> ChangePassword([FromBody]ChangePasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await userManager.FindByEmailAsync(model.Username);
                if (user != null)
                {
                    var result = await userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);

                    logger.Log($"User {user.UserName} changed their password.");

                    return new JsonResult(result);
                }
            }

            return BadRequest();
        }

    }
}