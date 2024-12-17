using System.ComponentModel.DataAnnotations;

namespace SmartCards.DTOs.Deck
{
    public class CreateDeckRequestDTO
    {
        [Required]
        [MaxLength(50, ErrorMessage = "Tiêu đề chỉ cho phép 50 ký tự")]
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool IsPublic { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
