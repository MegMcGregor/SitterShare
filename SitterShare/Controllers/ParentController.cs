using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SitterShare.Models;
using SitterShare.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;

namespace SitterShare.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ParentController : ControllerBase
    {
        private readonly IParentRepository _parentRepository;
        public ParentController(IParentRepository parentRepository)
        {
            _parentRepository = parentRepository;
        }

        [HttpGet("{ParentFirebaseUid}")]
        public IActionResult GetParentByFireBaseId(string ParentFirebaseUid)
        {
            var currentParent = getCurrentUserProfile();
            var parentUserProfile = _parentRepository.GetParentByFireBaseId(currentParent.ParentFirebaseUid);
            if (parentUserProfile == null)
            {
                return NotFound();
            }
            return Ok(parentUserProfile);
        }

        [HttpGet("DoesUserExist/{parentFirebaseUid}")]
        public IActionResult DoesUserExist(string parentFirebaseUid)
        {
            var parentUserProfile = _parentRepository.GetParentByFireBaseId(parentFirebaseUid);
            if (parentUserProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(Parent parentUserProfile)
        {
            parentUserProfile.UserTypeId = UserType.Parent_ID;
            _parentRepository.Add(parentUserProfile);
            return CreatedAtAction(
                nameof(GetParentByFireBaseId),
                new { parentFirebaseUid = parentUserProfile.ParentFirebaseUid },
                parentUserProfile);
        }

        private string GetCurrentFirebaseUserProfileId()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return id;
        }
        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }


    }
}
