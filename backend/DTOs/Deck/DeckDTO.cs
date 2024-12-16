﻿using SmartCards.Models;

namespace SmartCards.DTOs.Deck
{
    public class DeckDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool IsPublic { get; set; } = false;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; }
        public int UserId { get; set; }
        public AppUser? User { get; set; }
    }
}
