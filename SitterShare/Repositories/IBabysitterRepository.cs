using SitterShare.Models;

namespace SitterShare.Repositories
{
    public interface IBabysitterRepository
    {
        Babysitter GetSitterByFirebaseId(string sitterFirebaseUid);
    }
}