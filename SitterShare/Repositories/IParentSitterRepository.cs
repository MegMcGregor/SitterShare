using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IParentSitterRepository
    {
        public List<ParentSitter> GetMyBabysitterList(int id);
        //public List<ParentSitter> GetMyClients(int id);
        public ParentSitter GetMyBabysitterById(int id);
    }
}