using System.ComponentModel.DataAnnotations;

namespace SmartCards.DTOs.Account
{
    public class SigninDTO
    {
        [Required]
        public string? EmailOrUsername { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
