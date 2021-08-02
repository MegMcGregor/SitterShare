//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using SitterShare.Models;
//using SitterShare.Repositories;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Security.Claims;
//using System.Threading.Tasks;

//namespace SitterShare.Controllers
//{
//    [Authorize]
//    [Route("api/[controller]")]
//    [ApiController]
//    public class BabysitterController : ControllerBase
//    {
//        private readonly IBabysitterRepository _babysitterRepository;
//        public BabysitterController(IBabysitterRepository babysitterRepository)
//        {
//            _babysitterRepository = babysitterRepository;
//        }

//        [HttpGet("{BabysitterFirebaseUid}")]
//        public IActionResult GetSitterByFirebaseId(string sitterFirebaseUid)
//        {
//            var currentBabysitter = getCurrentUserProfile();
//            var babysitterUserProfile = _babysitterRepository.GetSitterByFirebaseId(currentBabysitter.SitterFirebaseUid);
//            if (babysitterUserProfile == null)
//            {
//                return NotFound();
//            }
//            return Ok(babysitterUserProfile);
//        }

//        [HttpGet("DoesUserExist/{parentFirebaseUid}")]
//        public IActionResult DoesUserExist(string sitterFirebaseUid)
//        {
//            var babysitterProfile = _babysitterRepository.GetSitterByFirebaseId(sitterFirebaseUid);
//            if (babysitterProfile == null)
//            {
//                return NotFound();
//            }
//            return Ok();
//        }

//        private string GetCurrentFirebaseUserProfileId()
//        {
//            string id = User.FindFirstValue(ClaimTypes.NameIdentifier);
//            return id;
//        }
//        private Babysitter getCurrentUserProfile()
//        {
//            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
//            return _babysitterRepository.GetSitterByFirebaseId(firebaseUserId);
//        }

//    }
//}
