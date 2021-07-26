using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class UserType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public static int Parent_ID => 1;
        public static int Babysitter_ID => 2;
    }
}