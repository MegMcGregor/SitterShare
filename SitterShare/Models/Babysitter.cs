using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Models
{
    public class Babysitter
    {
        public int Id { get; set; }
        public string SitterFirebaseUid { get; set; }
        public int UserTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool isMinor { get; set; }
        public int Zipcode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Bio { get; set; }
        public bool isCprCertified { get; set; }
        public bool hasDriversLisence { get; set; }
        public bool hasTransportation { get; set; }
        public bool hasInfantExperience { get; set; }
    }
}
