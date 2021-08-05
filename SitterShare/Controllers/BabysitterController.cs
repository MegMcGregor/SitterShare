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
    public class BabysitterController : ControllerBase
    {
        private readonly IBabysitterRepository _babysitterRepository;
        public BabysitterController(IBabysitterRepository babysitterRepository)
        {
            _babysitterRepository = babysitterRepository;
        }

        [HttpGet("{BabysitterFirebaseUid}")]
        public IActionResult GetSitterByFirebaseId(string sitterFirebaseUid)
        {
            var currentBabysitter = getCurrentUserProfile();
            var babysitterUserProfile = _babysitterRepository.GetSitterByFirebaseId(currentBabysitter.SitterFirebaseUid);
            if (babysitterUserProfile == null)
            {
                return NotFound();
            }
            return Ok(babysitterUserProfile);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_babysitterRepository.GetAll());
        }

        [HttpGet("DoesUserExist/{sitterFirebaseUid}")]
        public IActionResult DoesUserExist(string sitterFirebaseUid)
        {
            var babysitterProfile = _babysitterRepository.GetSitterByFirebaseId(sitterFirebaseUid);
            if (babysitterProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpGet("ById/{id}")]
        public IActionResult GetSitterById(int id)
        {
            var babysitter = _babysitterRepository.GetSitterById(id);
            return Ok(babysitter);
        }


        [HttpPost]
        public IActionResult Post(Babysitter babysittertUserProfile)
        {
            babysittertUserProfile.UserTypeId = UserType.Babysitter_ID;
            _babysitterRepository.Add(babysittertUserProfile);
            return CreatedAtAction(
                nameof(GetSitterByFirebaseId),
                new { sitterFirebaseUid = babysittertUserProfile.SitterFirebaseUid },
                babysittertUserProfile);
        }

        //[HttpGet("search")]
        //public IActionResult Search(string q)
        //{
        //    return Ok(_babysitterRepository.SearchForSittersByName(q));
        //}

        private string GetCurrentFirebaseUserProfileId()
        {
            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return id;
        }
        private Babysitter getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _babysitterRepository.GetSitterByFirebaseId(firebaseUserId);
        }

    }
}
