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


    }
}