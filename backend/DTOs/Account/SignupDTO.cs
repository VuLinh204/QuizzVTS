using System.ComponentModel.DataAnnotations;

namespace SmartCards.DTOs.Account
{
    public class SignupDTO
    {
        [Required]
        public string? Username { get; set; }
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
    }
}
