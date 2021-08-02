//using Microsoft.Extensions.Configuration;
//using SitterShare.Models;
//using SitterShare.Utils;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace SitterShare.Repositories
//{
//    public class BabysitterRepository : BaseRepository, IBabysitterRepository
//    {
//        public BabysitterRepository(IConfiguration configuration) : base(configuration) { }

//        public Babysitter GetSitterByFirebaseId(string sitterFirebaseUid)
//        {
//            using (var conn = Connection)
//            {
//                conn.Open();
//                using (var cmd = conn.CreateCommand())
//                {
//                    cmd.CommandText = @"
//                    b.Id,
//                    b.SitterFirebaseUid,
//                    b.UserTypeId,
//                    b.FirstName, 
//                    b.LastName,
//                    b.Minor,
//                    b.Zipcode,
//                    b.Phone,
//                    b.Email,
//                    b.Bio,
//                    b.isCprCertified,
//                    b.hasDriversLisence,
//                    b.hasTransportation,
//                    b.hasInfantExperience

//                    FROM Babysitter b
//                    WHERE userTypeId=2 AND sitterFirebaseUID=@sitterfirebaseUID";

//                    Utils.DbUtils.AddParameter(cmd, "@sitterfirebaseUID", sitterFirebaseUid);

//                    Babysitter sitterUserProfile = null;

//                    var reader = cmd.ExecuteReader();
//                    if (reader.Read())
//                    {
//                        sitterUserProfile = new Babysitter()
//                        {
//                            Id = DbUtils.GetInt(reader, "id"),
//                            SitterFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
//                            UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
//                            FirstName = DbUtils.GetString(reader, "firstname"),
//                            LastName = DbUtils.GetString(reader, "lastname"),
//                            isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
//                            Zipcode = DbUtils.GetInt(reader, "zipcode"),
//                            Email = DbUtils.GetString(reader, "email"),
//                            Phone = DbUtils.GetString(reader, "phone"),
//                            isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
//                            hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
//                            hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
//                            hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))
//                        };
//                    }
//                    reader.Close();

//                    return sitterUserProfile;
//                }
//            }
//        }
//    }
//}

