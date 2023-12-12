using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    private static readonly List<User> _users = new()
    {
        new User { Id = 1, Name = "Jhon Doe" },
        new User { Id = 2, Name = "Jane Doe" }
    };

    [HttpGet]
    public  ActionResult<List<User>> GetUsers()
    {
       
        return  _users.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<List<User>> GetUser(int id)
    {
        User? item = _users.Find((x) => x.Id == id);

        if (item != null)
        {
            List<User> res = new List<User>();
            res.Add(item);
            return res.ToList();
        } else
        {
            return NotFound();
        }

       
    }
}