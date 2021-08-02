using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class ParentRepository : BaseRepository, IParentRepository
    {
        public ParentRepository(IConfiguration configuration) : base(configuration) { }

        public Parent GetParentByFireBaseId(string parentFirebaseUid)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT 
                    p.Id,
                    p.ParentFirebaseUid,
                    p.UserTypeId,
                    p.FirstName, 
                    p.LastName,
                    p.Address,
                    p.City,
                    p.State,
                    p.Zipcode,
                    p.Phone,
                    p.Email,
                    p.NumberOfKids
                    FROM Parent p
                    WHERE userTypeId=1 AND ParentFirebaseUID=@parentfirebaseUID";

                    Utils.DbUtils.AddParameter(cmd, "@parentfirebaseUID", parentFirebaseUid);

                    Parent parentUserProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        parentUserProfile = new Parent()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            ParentFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
                            UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                            FirstName = DbUtils.GetString(reader, "firstname"),
                            LastName = DbUtils.GetString(reader, "lastname"),
                            Address = DbUtils.GetString(reader, "address"),
                            City = DbUtils.GetString(reader, "city"),
                            Zipcode = DbUtils.GetInt(reader, "zipcode"),
                            Email = DbUtils.GetString(reader, "email"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            NumberOfKids = DbUtils.GetInt(reader, "numberofkids"),
                        };
                    }
                    reader.Close();

                    return parentUserProfile;
                }
            }
        }


        public void Add(Parent parentUserProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Parent 
                                    (ParentFirebaseUid, UserTypeId, FirstName, LastName, Address, 
                                    City, State, ZipCode, Email)
                                    OUTPUT INSERTED.ID
                                    VALUES (@ParentFirebaseUid, @userTypeId, @FirstName, @LastName, @Address,
                                           @City, @State, @Zipcode, @Phone, @email, @NumberofKids)";
                    DbUtils.AddParameter(cmd, "@FirebaseUserId", parentUserProfile.ParentFirebaseUid);
                    DbUtils.AddParameter(cmd, "@UserTypeId", parentUserProfile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@FirstName", parentUserProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", parentUserProfile.LastName);
                    DbUtils.AddParameter(cmd, "@DisplayName", parentUserProfile.Address);
                    DbUtils.AddParameter(cmd, "@Email", parentUserProfile.City);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", parentUserProfile.State);
                    DbUtils.AddParameter(cmd, "@ImageLocation", parentUserProfile.Zipcode);
                    DbUtils.AddParameter(cmd, "@UserTypeId", parentUserProfile.Email);

                    parentUserProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}