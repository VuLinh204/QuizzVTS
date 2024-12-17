using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartCards.Models
{
    [Table("Decks")]
    public class Deck
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool IsPublic { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }
        public string UserId { get; set; } = string.Empty;
        public AppUser? User { get; set; }
        public List<Flashcard> Flashcards { get; set; } = new List<Flashcard>();
        public List<FolderDeck> FolderDecks { get; set; } = new List<FolderDeck>();
    }
}
