using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SmartCards.Controllers;
using SmartCards.Data;
using SmartCards.DTOs.Deck;
using SmartCards.Helpers;
using SmartCards.Interfaces;
using SmartCards.Models;
using System.Reflection;

namespace SmartCards.Repositories
{
    public class DeckRepository : IDeckRepository
    {
        private readonly AppDbContext _context;
        public DeckRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Deck> CreateAsync(Deck deckModel)
        {
            await _context.Decks.AddAsync(deckModel);
            await _context.SaveChangesAsync();
            return deckModel;
        }

        public Task<Deck?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Deck>> GetAllAsync(DeckQueryObject query, string userId)
        {
            var decks = _context.Decks.Include(x => x.Flashcards).Where(x => x.UserId == userId).AsQueryable();

            if (!string.IsNullOrEmpty(query.Title))
                decks = decks.Where(x => x.Title.Contains(query.Title));

            if (!string.IsNullOrEmpty(query.SortBy))
            {
                if (query.SortBy.Equals("CreatedAt", StringComparison.OrdinalIgnoreCase))
                    decks = query.IsDecending ? decks.OrderByDescending(x => x.CreatedAt)
                        : decks.OrderBy(x => x.CreatedAt);
            }

            return await decks.ToListAsync();
        }

        public async Task<Deck> GetByIdAsync(int id)
        {
            //var deck = await _context.Decks.Include(x => x.Flashcards).FirstOrDefaultAsync(x => x.Id == id);
            //if (deck == null) return 
            return await _context.Decks.Include(x => x.Flashcards).FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<Deck?> UpdateAsync(int id, UpdateDeckRequestDTO deckDTO)
        {
            throw new NotImplementedException();
        }
    }
}
