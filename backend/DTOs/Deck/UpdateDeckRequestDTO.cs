using System.ComponentModel.DataAnnotations;

namespace SmartCards.DTOs.Deck
{
    public class UpdateDeckRequestDTO
    {
        [Required]
        [MaxLength(50, ErrorMessage = "Tiêu đề chỉ cho phép 50 ký tự")]
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool IsPublic { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
