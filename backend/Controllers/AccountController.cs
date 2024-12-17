using Azure;
using Elfie.Serialization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SmartCards.DTOs.Account;
using SmartCards.Interfaces;
using SmartCards.Models;

namespace SmartCards.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
        }

        [HttpPost("signin")]
        public async Task<IActionResult> Signin(SigninDTO signinDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == signinDTO.EmailOrUsername
                                                                    || x.Email == signinDTO.EmailOrUsername);
            if (user == null) return Unauthorized("Email hoặc Username không đúng!");

            var result = await _signInManager.CheckPasswordSignInAsync(user, signinDTO.Password!, false);
            if (!result.Succeeded) return Unauthorized("Email/Username hoặc mật khẩu không đúng!");

            return Ok(
                new UserDTO
                {
                    Username = user.UserName ?? "",
                    Email = user.Email ?? "",
                    Token = _tokenService.CreateToken(user)
                }
            );
        }

        [HttpPost("signup-facebook")]
        public async Task<IActionResult> SignupFacebook([FromBody] string token)
        {
            try
            {
                var fbUserDTO = await this.GetFacebookUserDTO(token);
                if (fbUserDTO == null) return Unauthorized("Invalid facebook token");

                var appUser = await _userManager.FindByEmailAsync(fbUserDTO.Email);
                if (appUser == null)
                {
                    appUser = new AppUser
                    {
                        UserName = fbUserDTO.Email,
                        Email = fbUserDTO.Email,
                    };

                    var createUserResult = await _userManager.CreateAsync(appUser);
                    if (!createUserResult.Succeeded) return StatusCode(500, createUserResult.Errors);

                    var addRoleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if (!addRoleResult.Succeeded) return StatusCode(500, addRoleResult.Errors);
                }

                return Ok(GetUserDTO(appUser));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost("signup-goolge")]
        public async Task<IActionResult> SignupGoogle([FromBody] string token)
        {
            try
            {
                var ggUserDTO = await this.GetGoogleUserDTO(token);
                if (ggUserDTO == null) return Unauthorized("Invalid google token");

                var appUser = await _userManager.FindByEmailAsync(ggUserDTO.Email);
                if (appUser == null)
                {
                    appUser = new AppUser
                    {
                        UserName = ggUserDTO.Email,
                        Email = ggUserDTO.Email,
                        EmailConfirmed = true
                    };

                    var createUserResult = await _userManager.CreateAsync(appUser);
                    if (!createUserResult.Succeeded) return StatusCode(500, createUserResult.Errors);

                    var addRoleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if (!addRoleResult.Succeeded) return StatusCode(500, addRoleResult.Errors);
                }
               
                return Ok(GetUserDTO(appUser));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] SignupDTO signupDTO)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);
                var appUser = new AppUser
                {
                    UserName = signupDTO.Username,
                    Email = signupDTO.Email
                };

                var createUserResult = await _userManager.CreateAsync(appUser, signupDTO.Password!);
                if (!createUserResult.Succeeded) return StatusCode(500, createUserResult.Errors);

                var addRoleResult = await _userManager.AddToRoleAsync(appUser, "User");
                if (!addRoleResult.Succeeded) return StatusCode(500, addRoleResult.Errors);

                return Ok(this.GetUserDTO(appUser));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        private UserDTO GetUserDTO(AppUser appUser)
        {
            return new UserDTO
            {
                Username = appUser.UserName!,
                Email = appUser.Email!,
                Token = _tokenService.CreateToken(appUser)
            };
        }

        private async Task<FacebookUserDTO> GetFacebookUserDTO(string token)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync($"https://graph.facebook.com/v12.0/me?fields=email,name&access_token={token}");
                var userInfo = JsonConvert.DeserializeObject<FacebookUserDTO>(response);
                return userInfo!;
            }
        }

        private async Task<GoogleUserDTO> GetGoogleUserDTO(string token)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync($"https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={token}");
                var userInfo = JsonConvert.DeserializeObject<GoogleUserDTO>(response);
                return userInfo!;
            }
        }
    }
}
