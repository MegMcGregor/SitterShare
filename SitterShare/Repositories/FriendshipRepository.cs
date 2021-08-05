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

        public List<Friendship> GetMyFriendList(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                 Select distinct u.firstName, u.lastName, u.id, f.userId, f.friendId
                    FROM friendship f
                    JOIN parent u ON f.userId = u.id OR f.friendId = u.id
                    WHERE (u.id IN (
                    SELECT f.friendId
                    FROM friendship f
                    WHERE f.userId = @id) 
                    OR u.id IN (
                    SELECT f.userId
                    FROM friendship f
                    WHERE f.friendId = @id
                        ))
                    AND (f.friendId =@id OR f.userId = @id)
                 ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    var myFriends = new List<Friendship>();
                    while (reader.Read())
                    {
                        myFriends.Add(new Friendship()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserId = DbUtils.GetInt(reader, "UserId"),
                            FriendId = DbUtils.GetInt(reader, "FriendId"),
                            Friend = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "FriendId"),
                                FirstName = DbUtils.GetString(reader, "FirstName"),
                                LastName = DbUtils.GetString(reader, "LastName"),
                            }
                        });
                    }

                    reader.Close();

                    return myFriends;
                }
            }
        }

        public void AddFriendToMyList(Friendship FriendConnection)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Friendship (UserId, FriendId)
                                    OUTPUT INSERTED.ID
                                    VALUES ( @userId, @friendId)";
                    cmd.Parameters.AddWithValue("@userId", FriendConnection.UserId);
                    cmd.Parameters.AddWithValue("@friendId", FriendConnection.FriendId);

                    FriendConnection.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE from Friendship
                            WHERE Id = @id
                        ";

                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Friendship> GetSittersInMyNetwork(int id)
        {
            using (var conn = Connection)
            {
                {
                    conn.Open();
                    using (var cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"
                                Select 
                                f.Id as FriendshipId,
                                f.UserId,
                                f.FriendId,
                                pu.Id as CurrentUserId,
                                pu.ParentFirebaseUid As UserFirebaseUid,
                                pf.Id as FriendOfUserId,                           
                                pf.FirstName as FriendFirstName,
                                pf.LastName as FriendLastName,
                                sc.Id as NetworkConnectionId,
                                sc.ParentId as FriendConnectionId,
                                sc.BabysitterId as SitterConnectionId,
                                b.Id as BabysitterId,
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
                                Join Parent pf on f.FriendId=pf.Id
                                Join ParentSitter sc on sc.ParentId=pf.Id
                                Join Babysitter b on sc.BabysitterId=b.Id
                                WHERE f.userId=@id
                         ";
                       
                        DbUtils.AddParameter(cmd, "@id", id);

                        var reader = cmd.ExecuteReader();

                        var sittersInMyNetwork = new List<Friendship>();
                        while (reader.Read())
                        {
                            sittersInMyNetwork.Add(new Friendship()
                            {
                                Id = DbUtils.GetInt(reader, "FriendshipId"),
                                UserId = DbUtils.GetInt(reader, "UserId"),
                                FriendId = DbUtils.GetInt(reader, "FriendId"),
                                User = new Parent()
                                {
                                    Id = DbUtils.GetInt(reader, "CurrentUserId"),
                                    ParentFirebaseUid = DbUtils.GetString(reader, "UserFirebaseUid"),
                                },
                                Friend = new Parent()
                                {
                                    Id = DbUtils.GetInt(reader, "FriendOfUserId"),
                                    FirstName = DbUtils.GetString(reader, "FriendFirstName"),
                                    LastName = DbUtils.GetString(reader, "FriendLastName"),
                                },
                                SitterConnection = new parentSitter()
                                {
                                    Id = DbUtils.GetInt(reader, "NetworkConnectionId"),
                                    ParentId = DbUtils.GetInt(reader, "FriendConnectionId"),
                                    BabysitterId = DbUtils.GetInt(reader, "SitterConnectionId"),
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


