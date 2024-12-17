using System.ComponentModel.DataAnnotations.Schema;

namespace SmartCards.Models
{
    [Table("FolderDecks")]
    public class FolderDeck
    {
        public int DeckId { get; set; }
        public Deck? Deck { get; set; }
        public int FolderId { get; set; }
        public Folder? Folder { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }
    }
}
