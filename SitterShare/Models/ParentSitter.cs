using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class parentSitter
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public int BabysitterId { get; set; }
        public Babysitter Babysitter { get; set; }
        public Parent Parent { get; set; }
    }
}
