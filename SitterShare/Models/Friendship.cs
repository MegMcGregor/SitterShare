using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class Friendship
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int FriendId { get; set; }
        public Parent User { get; set; }
        public Parent Friend { get; set; }
        public parentSitter SitterConnection { get; set; }
    }
}
