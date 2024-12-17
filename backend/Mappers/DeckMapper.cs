using Microsoft.CodeAnalysis.CSharp.Syntax;
using SmartCards.DTOs.Deck;
using SmartCards.Models;

namespace SmartCards.Mappers
{
    public static class DeckMapper
    {
        public static DeckDTO ToDeckDTO(this Deck deckModel)
        {
            return new DeckDTO
            {
                Id = deckModel.Id,
                Title = deckModel.Title,
                Description = deckModel.Description,
                IsPublic = deckModel.IsPublic,
                CreatedAt = deckModel.CreatedAt,
                UpdatedAt = deckModel.UpdatedAt,
                Flashcards = deckModel.Flashcards
            };
        }

        public static Deck ToDeckFromCreateDTO(this CreateDeckRequestDTO deckDTO, string userId)
        {
            return new Deck
            {
                Title = deckDTO.Title,
                Description = deckDTO.Description,
                IsPublic = deckDTO.IsPublic,
                CreatedAt = deckDTO.CreatedAt,
                UserId = userId
            };
        }
    }
}
