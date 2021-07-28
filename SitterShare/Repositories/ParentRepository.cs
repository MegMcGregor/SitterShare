using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class ParentRepository
    {
        //public Models.Parent GetCurrentParentProfile (string firebaseUserId)
        //{
            //using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                SELECT up.Id, Up.FirebaseUserId, up.FirstName, up.LastName, up.DisplayName, 
        //                       up.Email, up.CreateDateTime, up.ImageLocation, up.UserTypeId,
        //                       ut.Name AS UserTypeName
        //                  FROM UserProfile up
        //                       LEFT JOIN UserType ut on up.UserTypeId = ut.Id
        //                 WHERE FirebaseUserId = @FirebaseuserId";

                //            DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                //            UserProfile userProfile = null;

                //            var reader = cmd.ExecuteReader();
                //            if (reader.Read())
                //            {
                //                userProfile = new UserProfile()
                //                {
                //                    Id = DbUtils.GetInt(reader, "Id"),
                //                    FirebaseUserId = DbUtils.GetString(reader, "FirebaseUserId"),
                //                    FirstName = DbUtils.GetString(reader, "FirstName"),
                //                    LastName = DbUtils.GetString(reader, "LastName"),
                //                    DisplayName = DbUtils.GetString(reader, "DisplayName"),
                //                    Email = DbUtils.GetString(reader, "Email"),
                //                    CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                //                    ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                //                    UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                //                    UserType = new UserType()
                //                    {
                //                        Id = DbUtils.GetInt(reader, "UserTypeId"),
                //                        Name = DbUtils.GetString(reader, "UserTypeName"),
                //                    }
                //                };
                //            }
                //            reader.Close();

                //            return userProfile;
                //        }
                //    }
                //}
        }
    }
}
