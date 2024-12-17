using Microsoft.EntityFrameworkCore.Query.Internal;
using SmartCards.DTOs.Deck;
using SmartCards.Helpers;
using SmartCards.Models;

namespace SmartCards.Interfaces
{
    public interface IDeckRepository
    {
        Task<List<Deck>> GetAllAsync(DeckQueryObject queryObject, string userId);
        Task<Deck> GetByIdAsync(int id);
        Task<Deck> CreateAsync(Deck deckModel);
        Task<Deck?> UpdateAsync(int id, UpdateDeckRequestDTO deckDTO);
        Task<Deck?> DeleteAsync(int id);
    }
}
