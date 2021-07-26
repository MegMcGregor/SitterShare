using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class ParentSitter
    {
        public int Id { get; set; }
        public int ParentId { get; set; }
        public int SitterId { get; set; }
    }
}
