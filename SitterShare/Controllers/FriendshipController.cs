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
        public IActionResult GetSittersInMyNetwork(int id)
        {
            int userId = GetCurrentUserProfileId();
            var sittersInMyNetwork = _friendshipRepository.GetSittersInMyNetwork(userId);
            return Ok(sittersInMyNetwork);
        }

        [HttpPost]
        public IActionResult Post(Friendship FriendConnection)
        {
            var user = getCurrentUserProfile();
            FriendConnection.UserId = user.Id;
            _friendshipRepository.AddFriendToMyList(FriendConnection);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _friendshipRepository.Delete(id);
            return NoContent();
        }

        private int GetCurrentUserProfileId()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var friendshipProfile = _parentRepository.GetParentByFireBaseId(firebaseUserId);
            return friendshipProfile.Id;
        }

        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }

    }
}

