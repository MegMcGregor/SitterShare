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

        //[HttpGet("getMyClients")]
        //public IActionResult GetMyClients()
        //{
        //    var currentUser = getCurrentUserProfile();
        //    var myClients = _parentSitterRepository.GetMyBabysitterList(currentUser.Id);
        //    return Ok(myClients);
        //}

        //public void AddtoMySitterListt(ParentSitter connection)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                    INSERT INTO POST (Title, Content, ImageLocation, CreateDateTime, PublishDateTime, IsApproved, CategoryId, UserProfileId, isDeleted)
        //                    OUTPUT INSERTED.ID
        //                    VALUES(
        //                        @Title, @Content, @ImageLocation, @CreateDateTime, @PublishDateTime, 1, @CategoryId, @UserProfileId, 0 )";

        //            DbUtils.AddParameter(cmd, @"Title", post.Title);
        //            DbUtils.AddParameter(cmd, "@Content", post.Content);
        //            DbUtils.AddParameter(cmd, "@ImageLocation", post.ImageLocation);
        //            DbUtils.AddParameter(cmd, "@CreateDateTime", post.CreateDateTime);
        //            DbUtils.AddParameter(cmd, "@PublishDateTime", post.PublishDateTime);
        //            DbUtils.AddParameter(cmd, "@CategoryId", post.CategoryId);
        //            DbUtils.AddParameter(cmd, "@UserProfileId", post.UserProfileId);

        //            post.Id = (int)cmd.ExecuteScalar();

        //        }
        //    }
        //}

        private Parent getCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _parentRepository.GetParentByFireBaseId(firebaseUserId);
        }
    }
}
