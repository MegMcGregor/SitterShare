using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class FriendshipRepository : BaseRepository, IFriendshipRepository
    {
        public FriendshipRepository(IConfiguration configuration) : base(configuration) { }

        public List<Friendship> GetMyFriendList()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                Select
                f.Id as FriendshipId,
                f.UserId,
                f.FriendId,
                pu.Id as parentUserId,
                pu.ParentFirebaseUid As UserFirebaseUid,
                pu.FirstName as UserFirstName,
                pu.LastName as UserLastName,
                pf.Id AS FriendId,
                pf.ParentFirebaseUid As FriendFirebaseUid,
                pf.FirstName as FriendFirstName,
                pf.LastName as FriendLastName

                From Friendship f
                Join Parent pu on pu.Id = f.UserId
                Join Parent pf on pf.Id = f.FriendId
                 ";

                    var reader = cmd.ExecuteReader();

                    var myFriends = new List<Friendship>();
                    while (reader.Read())
                    {
                        myFriends.Add(new Friendship()
                        {
                            Id = DbUtils.GetInt(reader, "FriendshipId"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            FriendId = DbUtils.GetInt(reader, "FriendId"),
                            User = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "parentUserId"),
                                ParentFirebaseUid = DbUtils.GetString(reader, "UserFirebaseUid"),
                                FirstName = DbUtils.GetString(reader, "UserFirstName"),
                                LastName = DbUtils.GetString(reader, "UserLastName"),
                            },
                            Friend = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "FriendId"),
                                ParentFirebaseUid = DbUtils.GetString(reader, "FriendFirebaseUid"),
                                FirstName = DbUtils.GetString(reader, "FriendFirstName"),
                                LastName = DbUtils.GetString(reader, "FriendLastName"),
                            }
                        });
                    }

                    reader.Close();

                    return myFriends;
                }
            }
        }

        public List<Friendship> GetSittersInMyNetwork()
        {
            using (var conn = Connection)
            {
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                        Select 
                        f.Id,
                        f.UserId,
                        f.FriendId,
                        pu.Id AS parentUserId,
                        pf.Id AS FriendOfUserId,
                        pf.ParentFirebaseUid As FriendFirebaseUid,
                        pf.FirstName as FriendFirstName,
                        pf.LastName as FriendLastName,
                        sc.Id as SitterFriendConnectionId,
                        sc.ParentId as FriendConnectionId,
                        sc.BabysitterId as SitterInNetworkId,
                        b.Id = BabysitterId
                        b.FirstName as BabysitterFirstName,
                        b.LastName as BabysitterLastName,
                        b.Minor,
                        b.Zipcode,
                        b.Phone,
                        b.Email,
                        b.Bio,
                        b.IsCprCertified,
                        b.HasDriversLisence,
                        b.HasTransportation,
                        b.HasInfantExperience

                        From Friendship f
                        Join Parent pu on pu.Id=f.UserId
                        Join Parent pf on f.FriendId = pf.Id
                        Join ParentSitter sc on sc.ParentId = pf.Id
                        Join Babysitter b on sc.BabysitterId = b.Id
                 ";

                        var reader = cmd.ExecuteReader();

                        var sittersInMyNetwork = new List<Friendship>();
                        while (reader.Read())
                        {
                            sittersInMyNetwork.Add(new Friendship()
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                FriendId = DbUtils.GetInt(reader, "FriendId"),
                                Friend = new Parent()
                                {
                                    Id = DbUtils.GetInt(reader, "FriendOfUserId"),
                                    ParentFirebaseUid = DbUtils.GetString(reader, "FriendFirebaseUid"),
                                    FirstName = DbUtils.GetString(reader, "FriendFirstName"),
                                    LastName = DbUtils.GetString(reader, "FriendLastName"),
                                },
                                SitterConnection = new ParentSitter()
                                {
                                    Id = DbUtils.GetInt(reader, "SitterFriendConnectionId"),
                                    ParentId = DbUtils.GetInt(reader, "FriendConnectionId"),
                                    BabysitterId = DbUtils.GetInt(reader, "SitterInNetworkId"),
                                    Babysitter = new Babysitter
                                    {
                                        Id = DbUtils.GetInt(reader, "BabysitterId"),
                                        FirstName = DbUtils.GetString(reader, "BabysitterFirstName"),
                                        LastName = DbUtils.GetString(reader, "BabysitterLastName"),
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
                                }

                            });
                        }

                        reader.Close();

                        return sittersInMyNetwork;
                    }
                }
            }

        }
    }
}


