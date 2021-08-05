using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IFriendshipRepository
    {
        List<Friendship> GetMyFriendList(int id);
        //public List<Friendship> GetSitterInMyNetworkById(int id);
        List<Friendship> GetSittersInMyNetwork(int id);
        public void AddFriendToMyList(Friendship FriendConnection);
        public void Delete(int friendId, int userId);
    }
}