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

        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }
    }
}
