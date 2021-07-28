using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IParentSitterRepository
    {
        List<ParentSitter> GetMyBabysitterList(string parentFirebaseUid);
    }
}