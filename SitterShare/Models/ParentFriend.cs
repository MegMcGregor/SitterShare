using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class ParentFriend
    {
        public int Id { get; set; }
        public int FriendAId { get; set; }
        public int FriendBId { get; set; }
        public Parent ParentA { get; set; }
        public Parent ParentB { get; set; }
    }
}
