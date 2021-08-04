using SitterShare.Models;
using System.Collections.Generic;

namespace SitterShare.Repositories
{
    public interface IBabysitterRepository
    {
        Babysitter GetSitterByFirebaseId(string sitterFirebaseUid);
        public List<Babysitter> SearchForSittersByName(string criterion);
        public Babysitter GetSitterById(int id);
        public List<Babysitter> GetAll();
        public void Add(Babysitter babysitterUserProfile);
    }
}