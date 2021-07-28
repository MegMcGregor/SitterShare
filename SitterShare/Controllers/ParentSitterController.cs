using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SitterShare.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParentSitterController : ControllerBase
    {
        private readonly IParentSitterRepository _parentSitterRepository;
        public ParentSitterController(IParentSitterRepository parentSitterRepository)
        {
            _parentSitterRepository = parentSitterRepository;
        }

        ///Can I change this to take in the user Id?
        [HttpGet("GetMyBabysitterList")]
        public IActionResult GetMyBabysitterList(string parentFirebaseUid)
        {
            var myBabysitters = _parentSitterRepository.GetMyBabysitterList(parentFirebaseUid);
            return Ok(myBabysitters);
        }
    }
}
