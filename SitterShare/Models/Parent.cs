using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class Parent
    {
        public int Id { get; set; }
        public string ParentFirebaseUid { get; set; }
        public int UserTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zipcode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public int NumberOfKids { get; set; }
    }
}

