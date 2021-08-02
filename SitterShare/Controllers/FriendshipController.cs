using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SitterShare.Models;
using SitterShare.Repositories;
using System.Collections.Generic;
using System.Security.Claims;

namespace SitterShare.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FriendshipController : ControllerBase
    {
        private readonly IFriendshipRepository _friendshipRepository;
        private readonly IParentRepository _parentRepository;
        public FriendshipController(IFriendshipRepository friendshipRepository, IParentRepository parentRepository)
        {
            _friendshipRepository = friendshipRepository;
            _parentRepository = parentRepository;
        }

        [HttpGet("GetMyFriendList")]
        public IActionResult GetMyFriendList()
        {
            var currentUser = getCurrentUserProfile();
            return Ok(_friendshipRepository.GetMyFriendList(currentUser.Id));
        }

        [HttpGet("GetSittersInMyNetwork")]
        public IActionResult GetSittersInMyNetwork()
        {
            var sittersInMyNetwork = _friendshipRepository.GetSittersInMyNetwork();
            return Ok(sittersInMyNetwork);
        }

        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }

    }
}

