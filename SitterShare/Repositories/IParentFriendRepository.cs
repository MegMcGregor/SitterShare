using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IParentFriendRepository
    {
        List<ParentFriend> GetMyFriendList(int id);
    }
}