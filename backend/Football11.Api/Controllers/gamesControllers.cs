using Microsoft.AspNetCore.Mvc;

namespace Football11.Api.Controllers;

[ApiController]
[Route("api/games")]
public sealed class GamesController : ControllerBase
{
    [HttpPost]
    public IActionResult Create()
    {
        return Ok(new
        {
            Id = Guid.NewGuid(),
            Formation = "4-3-3",
            CurrentRound = 1,
            CurrentCountry = "Brazil",
            Status = "InProgress"
        });
    }
}