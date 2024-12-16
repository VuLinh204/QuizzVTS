namespace SmartCards.Helpers
{
    public class DeckQueryObject
    {
        public string? Title { get; set; } = null;
        public string? SortBy { get; set; } = null;
        public DateTime CreatedAt { get; set; }
        public bool IsDecending { get; set; } = false;
        public bool IsPublic { get; set; } = false;
    }
}
