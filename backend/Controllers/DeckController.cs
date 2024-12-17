using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartCards.DTOs.Deck;
using SmartCards.Helpers;
using SmartCards.Interfaces;
using SmartCards.Mappers;
using System.Security.Claims;

namespace SmartCards.Controllers
{
    [Route("api/deck")]
    [ApiController]
    public class DeckController : BaseController
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
            if (string.IsNullOrEmpty(UserId)) return Unauthorized("User ID not found.");

            var decks = await _deckRepo.GetAllAsync(query, this.UserId);
            var decksDTO = decks.Select(x => x.ToDeckDTO()).ToList();
            return Ok(decksDTO);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var deck = await _deckRepo.GetByIdAsync(id);
            if (deck == null) return NotFound();
            return Ok(deck.ToDeckDTO());
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create([FromBody] CreateDeckRequestDTO deckDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            //if (string.IsNullOrEmpty(UserId)) return Unauthorized("User ID not found.");

            var deckModel = deckDTO.ToDeckFromCreateDTO(this.UserId);
            await _deckRepo.CreateAsync(deckModel);
            return CreatedAtAction(nameof(GetById), new {id = deckModel.Id}, deckModel.ToDeckDTO());
        }
    }
}
