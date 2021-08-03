using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class ParentSitterRepository : BaseRepository, IParentSitterRepository
    {
        public ParentSitterRepository(IConfiguration configuration) : base(configuration) { }

        public List<ParentSitter> GetMyBabysitterList(int id)
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
                WHERE ps.isConnectionAuthorized= 1 AND p.Id = @id
                 ";

                    DbUtils.AddParameter(cmd, "@id", id);


                    var reader = cmd.ExecuteReader();

                    var myBabysitters = new List<ParentSitter>();
                    while (reader.Read())
                    {
                        myBabysitters.Add(new ParentSitter()
                        {
                            Id = DbUtils.GetInt(reader, "ConnectionId"),
                            BabysitterId = DbUtils.GetInt(reader, "BabysitterId"),
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

        //public void AddSitterToMyList(ParentSitter ParentSitterConnection)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"INSERT INTO ParentSitter 
        //                            (Id, BabysitterId, ParentId, LastName, isMinor, 
        //                            Zipcode, Phone, Email, Bio, isCprCertified, hasDriversLisence, hasTransportation, hasInfantExperience)
        //                            OUTPUT INSERTED.ID
        //                            VALUES (@SitterFirebaseUid, @userTypeId, @FirstName, @LastName, @minor,
        //                                   @zipcode, @phone, @email, @bio, @isCprCertified, @hasDriversLisence, hasTransportation, hasInfantExperience)";
        //            babysitterUserProfile.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

        //public List<ParentSitter> GetMyClients(int id)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //        SELECT
        //        ps.Id,
        //        ps.ParentId,
        //        ps.BabysitterId,
        //        p.Id AS clientId,
        //        p.ParentFirebaseUid,
        //        p.UserTypeId,
        //        p.FirstName, 
        //        p.LastName,
        //        p.Address,
        //        p.City,
        //        p.State,
        //        p.Zipcode,
        //        p.Phone,
        //        p.Email,
        //        p.NumberOfKids

        //        From ParentSitter ps
        //        Left Join Parent P on ps.ParentId = p.Id
        //        WHERE ps.isConnectionAuthorized= 1 AND p.Id = @id
        //         ";

        //            DbUtils.AddParameter(cmd, "@id", id);

        //            var reader = cmd.ExecuteReader();

        //            var myClients = new List<ParentSitter>();
        //            while (reader.Read())
        //            {
        //                myClients.Add(new ParentSitter()
        //                {
        //                    Id = DbUtils.GetInt(reader, "ConnectionId"),
        //                    BabysitterId = DbUtils.GetInt(reader, "BabysitterId"),
        //                    ParentId = DbUtils.GetInt(reader, "ParentId"),
        //                    Parent = new Parent()
        //                    {
        //                        Id = DbUtils.GetInt(reader, "ClientId"),
        //                        ParentFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
        //                        UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
        //                        FirstName = DbUtils.GetString(reader, "firstname"),
        //                        LastName = DbUtils.GetString(reader, "lastname"),
        //                        Address = DbUtils.GetString(reader, "address"),
        //                        City = DbUtils.GetString(reader, "city"),
        //                        Zipcode = DbUtils.GetInt(reader, "zipcode"),
        //                        Email = DbUtils.GetString(reader, "email"),
        //                        Phone = DbUtils.GetString(reader, "phone"),
        //                        NumberOfKids = DbUtils.GetInt(reader, "numberofkids"),
        //                    },
        //                });

        //            }
        //            reader.Close();

        //            return myClients;
        //        }

        //    }
        //}

        public ParentSitter GetMyBabysitterById(int id)
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
                WHERE ps.isConnectionAuthorized= 1 AND b.Id = @id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    ParentSitter babysitter = null;
                    while (reader.Read())
                    {
                        if (babysitter == null)
                        {
                            babysitter = new ParentSitter()
                            {
                                Id = DbUtils.GetInt(reader, "ConnectionId"),
                                BabysitterId = DbUtils.GetInt(reader, "BabysitterId"),
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
                                }

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

