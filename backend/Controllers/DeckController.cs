using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartCards.Helpers;
using SmartCards.Interfaces;
using SmartCards.Mappers;
using System.Security.Claims;

namespace SmartCards.Controllers
{
    [Route("api/deck")]
    [ApiController]
    public class DeckController : ControllerBase
    {
        private readonly IDeckRepository _deckRepo;
        public DeckController(IDeckRepository deckRepo)
        {
            _deckRepo = deckRepo;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] DeckQueryObject query)
        {
            // Lấy userId từ token
            string userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId)) return Unauthorized("User ID not found.");
            var decks = await _deckRepo.GetAllAsync(query, userId);
            decks.Select(x => x.ToDeckDTO());
            return Ok(decks);
        }
    }
}
