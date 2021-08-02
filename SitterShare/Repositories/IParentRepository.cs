using SitterShare.Models;

namespace SitterShare.Repositories
{
    public interface IParentRepository
    {
        Parent GetParentByFireBaseId(string parentFirebaseUid);
        public void Add(Parent parentUserProfile);
    }
}