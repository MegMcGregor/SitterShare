using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class ParentSitterRepository
    {
        public class BabysitterRepository : BaseRepository
        {
            public BabysitterRepository(IConfiguration configuration) : base(configuration) { }

            public List<ParentSitter> GetMyBabysitterList(string parentFirebaseUid)
            {
                using (var conn = Connection)
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                SELECT
                ps.Id AS ConnectionId,
                ps.BabysitterId,
                ps.ParentId,
                ps.isConnectionAuthorized,
                b.Id AS SitterId,
                b.FirstName,
                b.LastName,
                b.Minor,
                b.ZipCode,
                b.Phone,
                b.email,
                b.bio,
                b.isCprCertified,
                b.hasDriversLisence,
                b.hasTransportation,
                b.hasInfantExperience,
                p.Id AS CurrentParentId,
                p.ParentFirebaseUID

                FROM Babysitter b
                LEFT JOIN ParentSitter ps ON ps.babysitterId = b.Id
                LEFT JOIN Parent p on p.Id = ps.ParentId
                WHERE ps.isConnectionAuthorized= 1 AND p.ParentFirebaseUid = parentFirebaseUid
                 ";

                        DbUtils.AddParameter(cmd, "@FirebaseUserId", parentFirebaseUid);


                        var reader = cmd.ExecuteReader();

                        var myBabysitters = new List<ParentSitter>();
                        while (reader.Read())
                        {
                            myBabysitters.Add(new ParentSitter()
                            {
                                Id = DbUtils.GetInt(reader, "ConnectionId"),
                                SitterId = DbUtils.GetInt(reader, "BabysitterId"),
                                ParentId = DbUtils.GetInt(reader, "ParentId"),
                                Babysitter = new Babysitter()
                                {
                                    Id = DbUtils.GetInt(reader, "SitterId"),
                                    FirstName = DbUtils.GetString(reader, "firstName"),
                                    LastName = DbUtils.GetString(reader, "lastName"),
                                    isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
                                    Zipcode = DbUtils.GetInt(reader, "zipcode"),
                                    Phone = DbUtils.GetString(reader, "phone"),
                                    Email = DbUtils.GetString(reader, "email"),
                                    Bio = DbUtils.GetString(reader, "bio"),
                                    isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
                                    hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
                                    hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
                                    hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))
                                },
                                Parent = new Parent()
                                {
                                    Id = DbUtils.GetInt(reader, "CurrentParentId"),
                                    ParentFirebaseUid = DbUtils.GetString(reader, "ParentFirebaseUid")
                                }
                            });

                        }
                        reader.Close();

                        return myBabysitters;
                    }

                }
            }
        }
    }
}
