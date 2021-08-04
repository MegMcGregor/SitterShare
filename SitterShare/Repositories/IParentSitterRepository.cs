using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IParentSitterRepository
    {
        public List<parentSitter> GetMyBabysitterList(int id);
        public void AddSitterToMyList(parentSitter ParentSitterConnection);

        //public List<ParentSitter> GetMyClients(int id);
        public parentSitter GetMyBabysitterById(int id);
        public void Delete(int babysitterId, int parentId);

    }
}