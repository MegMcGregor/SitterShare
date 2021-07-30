using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SitterShare.Models;
using SitterShare.Repositories;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace SitterShare.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ParentFriendController : ControllerBase
    {
        private readonly IParentFriendRepository _parentFriendRepository;
        private readonly IParentRepository _parentRepository;
        public ParentFriendController(IParentFriendRepository parentFriendRepository, IParentRepository parentRepository)
        {
            _parentFriendRepository = parentFriendRepository;
            _parentRepository = parentRepository;
        }

        [HttpGet("GetMyFriendList")]
        public IActionResult GetMyFriendList()
        {
            var currentParent = getCurrentUserProfile();
            var myFriends = _parentFriendRepository.GetMyFriendList(currentParent.Id);
            return Ok(myFriends);
        }

        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }

    }
}

