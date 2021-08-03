using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IParentRepository
    {
        Parent GetParentByFireBaseId(string parentFirebaseUid);
        public List<Parent> SearchForParentsByName(string criterion);
        public void Add(Parent parentUserProfile);
        public List<Parent> GetAll();

    }
}