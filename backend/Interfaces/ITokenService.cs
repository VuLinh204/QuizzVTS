using SmartCards.Models;

namespace SmartCards.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
