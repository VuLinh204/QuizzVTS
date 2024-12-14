using System.ComponentModel.DataAnnotations;

namespace SmartCards.DTOs.Account
{
    public class LoginDTO
    {
        [Required]
        public string? EmailOrUsername { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
