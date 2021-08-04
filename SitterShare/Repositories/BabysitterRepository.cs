using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class BabysitterRepository : BaseRepository, IBabysitterRepository
    {
        public BabysitterRepository(IConfiguration configuration) : base(configuration) { }

        public Babysitter GetSitterByFirebaseId(string sitterFirebaseUid)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                       SELECT
                    b.Id,
                    b.SitterFirebaseUid,
                    b.UserTypeId,
                    b.FirstName, 
                    b.LastName,
                    b.Minor,
                    b.Zipcode,
                    b.Phone,
                    b.Email,
                    b.Bio,
                    b.isCprCertified,
                    b.hasDriversLisence,
                    b.hasTransportation,
                    b.hasInfantExperience

                    FROM Babysitter b
                    WHERE userTypeId=2 AND b.sitterFirebaseUID=@sitterfirebaseUID";

                    Utils.DbUtils.AddParameter(cmd, "@sitterfirebaseUID", sitterFirebaseUid);

                    Babysitter sitterUserProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        sitterUserProfile = new Babysitter()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            SitterFirebaseUid = DbUtils.GetString(reader, "sitterfirebaseuid"),
                            UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                            FirstName = DbUtils.GetString(reader, "firstname"),
                            LastName = DbUtils.GetString(reader, "lastname"),
                            isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
                            Zipcode = DbUtils.GetInt(reader, "zipcode"),
                            Email = DbUtils.GetString(reader, "email"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
                            hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
                            hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
                            hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))
                        };
                    }
                    reader.Close();

                    return sitterUserProfile;
                }
            }
        }

        public void Add(Babysitter babysitterUserProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Babysitter 
                                    (SitterFirebaseUid, UserTypeId, FirstName, LastName, Minor, 
                                    Zipcode, Phone, Email, Bio, isCprCertified, HasDriversLisence, HasTransportation, HasInfantExperience)
                                    OUTPUT INSERTED.ID
                                    VALUES (@SitterFirebaseUid, @userTypeId, @FirstName, @LastName, @minor,
                                           @zipcode, @phone, @email, @bio, @isCprCertified, @hasDriversLisence, @hasTransportation, @hasInfantExperience)";
                    DbUtils.AddParameter(cmd, "@SitterFirebaseUid", babysitterUserProfile.SitterFirebaseUid);
                    DbUtils.AddParameter(cmd, "@UserTypeId", babysitterUserProfile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@FirstName", babysitterUserProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", babysitterUserProfile.LastName);
                    DbUtils.AddParameter(cmd, "@minor", babysitterUserProfile.isMinor);
                    DbUtils.AddParameter(cmd, "@zipcode", babysitterUserProfile.Zipcode);
                    DbUtils.AddParameter(cmd, "@Phone", babysitterUserProfile.Phone);
                    DbUtils.AddParameter(cmd, "@Email", babysitterUserProfile.Email);
                    DbUtils.AddParameter(cmd, "@bio", babysitterUserProfile.Bio);
                    DbUtils.AddParameter(cmd, "@isCprCertified", babysitterUserProfile.isCprCertified);
                    DbUtils.AddParameter(cmd, "@hasTransportation", babysitterUserProfile.hasTransportation);
                    DbUtils.AddParameter(cmd, "@hasInfantExperience", babysitterUserProfile.hasInfantExperience);
                    DbUtils.AddParameter(cmd, "@hasDriversLisence", babysitterUserProfile.hasDriversLisence);



                    babysitterUserProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        //public List<Babysitter> SearchForSittersByName(string criterion)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //            SELECT
        //            b.Id, 
        //            b.SitterFirebaseUID, 
        //            b.UserTypeId, 
        //            b.FirstName, 
        //            b.LastName, 
        //            b.Minor,
        //            b.Zipcode,
        //            b.Phone,
        //            b.Email,
        //            b.Bio,
        //            b.IsCprCertified,
        //            b.HasDriversLisence,
        //            b.HasTransportation,
        //            b.HasInfantExperience";

        //            var reader = cmd.ExecuteReader();
        //            var babysitters = new List<Babysitter>();
        //            while (reader.Read())
        //            {
        //                babysitters.Add(new Babysitter()
        //                {
        //                    Id = DbUtils.GetInt(reader, "id"),
        //                    SitterFirebaseUid = DbUtils.GetString(reader, "sitterfirebaseuid"),
        //                    UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
        //                    FirstName = DbUtils.GetString(reader, "firstname"),
        //                    LastName = DbUtils.GetString(reader, "lastname"),
        //                    isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
        //                    Zipcode = DbUtils.GetInt(reader, "zipcode"),
        //                    Email = DbUtils.GetString(reader, "email"),
        //                    Phone = DbUtils.GetString(reader, "phone"),
        //                    isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
        //                    hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
        //                    hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
        //                    hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))
        //                });
        //            }

        //            reader.Close();
        //            return babysitters;
        //        }
        //    }
        //}

        public List<Babysitter> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                     SELECT
                    b.Id, 
                    b.SitterFirebaseUID, 
                    b.UserTypeId, 
                    b.FirstName, 
                    b.LastName, 
                    b.Minor,
                    b.Zipcode,
                    b.Phone,
                    b.Email,
                    b.Bio,
                    b.IsCprCertified,
                    b.HasDriversLisence,
                    b.HasTransportation,
                    b.HasInfantExperience
                    From Babysitter b 
                    Where userTypeId = 2
                    ";

                    var reader = cmd.ExecuteReader();

                    var babysitters = new List<Babysitter>();
                    while (reader.Read())
                    {
                        babysitters.Add(new Babysitter()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            SitterFirebaseUid = DbUtils.GetString(reader, "sitterfirebaseuid"),
                            UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                            FirstName = DbUtils.GetString(reader, "firstname"),
                            LastName = DbUtils.GetString(reader, "lastname"),
                            Bio = DbUtils.GetString(reader, "bio"),
                            isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
                            Zipcode = DbUtils.GetInt(reader, "zipcode"),
                            Email = DbUtils.GetString(reader, "email"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
                            hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
                            hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
                            hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))

                        });
                    }

                    reader.Close();

                    return babysitters;
                }
            }
        }

        public Babysitter GetSitterById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"                    
                    SELECT
                    b.Id, 
                    b.SitterFirebaseUID, 
                    b.UserTypeId, 
                    b.FirstName, 
                    b.LastName, 
                    b.Minor,
                    b.Zipcode,
                    b.Phone,
                    b.Email,
                    b.Bio,
                    b.IsCprCertified,
                    b.HasDriversLisence,
                    b.HasTransportation,
                    b.HasInfantExperience
                    From Babysitter b 
                    WHERE b.Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();
                    Babysitter babysitter = null;

                    if (reader.Read())
                    {
                        if (babysitter == null) ;
                        {

                            babysitter = new Babysitter()
                            {
                                Id = DbUtils.GetInt(reader, "id"),
                                SitterFirebaseUid = DbUtils.GetString(reader, "sitterfirebaseuid"),
                                UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                                FirstName = DbUtils.GetString(reader, "firstname"),
                                LastName = DbUtils.GetString(reader, "lastname"),
                                Bio = DbUtils.GetString(reader, "bio"),
                                isMinor = reader.GetBoolean(reader.GetOrdinal("minor")),
                                Zipcode = DbUtils.GetInt(reader, "zipcode"),
                                Email = DbUtils.GetString(reader, "email"),
                                Phone = DbUtils.GetString(reader, "phone"),
                                isCprCertified = reader.GetBoolean(reader.GetOrdinal("iscprcertified")),
                                hasDriversLisence = reader.GetBoolean(reader.GetOrdinal("hasdriverslisence")),
                                hasTransportation = reader.GetBoolean(reader.GetOrdinal("hasTransportation")),
                                hasInfantExperience = reader.GetBoolean(reader.GetOrdinal("hasInfantExperience"))
                            };
                        }

                    }
                    reader.Close();
                    return babysitter;
                }
            }

        }
    }
}