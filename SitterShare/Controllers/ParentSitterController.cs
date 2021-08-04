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
    public class ParentSitterController : ControllerBase
    {
        private readonly IParentSitterRepository _parentSitterRepository;
        private readonly IParentRepository _parentRepository;
        public ParentSitterController(IParentSitterRepository parentSitterRepository, IParentRepository parentRepository)
        {
            _parentSitterRepository = parentSitterRepository;
            _parentRepository = parentRepository;
        }

        [HttpGet("GetMyBabysitterList")]
        public IActionResult GetMyBabysitterList()
        {
            var currentParent = getCurrentUserProfile();
            var myBabysitters = _parentSitterRepository.GetMyBabysitterList(currentParent.Id);
            return Ok(myBabysitters);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var babysitter = _parentSitterRepository.GetMyBabysitterById(id);
            if (babysitter == null)
            {
                return NotFound();
            }
            return Ok(babysitter);
        }

        [HttpPost]
        public IActionResult Post(parentSitter ParentSitterConnection)
        {
            var user = getCurrentUserProfile();
            ParentSitterConnection.ParentId = user.Id;
           _parentSitterRepository.AddSitterToMyList(ParentSitterConnection);
            return NoContent();
        }

        [HttpDelete("{babysitterId}")]
        public IActionResult Delete(int babysitterId)
        {
            var user = getCurrentUserProfile();
            _parentSitterRepository.Delete(babysitterId, user.Id);
            return NoContent();
        }


        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }

        //[HttpGet("getMyClients")]
        //public IActionResult GetMyClients()
        //{
        //    var currentUser = getCurrentUserProfile();
        //    var myClients = _parentSitterRepository.GetMyBabysitterList(currentUser.Id);
        //    return Ok(myClients);
        //}


    }
}
