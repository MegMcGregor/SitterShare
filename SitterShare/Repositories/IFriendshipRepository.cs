using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IFriendshipRepository
    {
        List<Friendship> GetMyFriendList();
        List<Friendship> GetSittersInMyNetwork();

    }
}