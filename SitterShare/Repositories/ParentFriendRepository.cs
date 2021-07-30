using Microsoft.Extensions.Configuration;
using SitterShare.Models;
using SitterShare.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SitterShare.Repositories
{
    public class ParentFriendRepository : BaseRepository, IParentFriendRepository
    {
        public ParentFriendRepository(IConfiguration configuration) : base(configuration) { }

        public List<ParentFriend> GetMyFriendList(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                Select
                pf.Id,
                pf.FriendAId,
                pf.FriendBId,
                pa.Id as parentAId,
                pa.ParentFirebaseUid As ParentAFirebaseUid,
                pa.FirstName as ParentAFirstName,
                pa.LastName as ParentALastName,
                pb.Id AS parentBId,
                pb.ParentFirebaseUid As ParentBFirebaseUid,
                pb.FirstName as ParentBFirstName,
                pb.LastName as ParentBLastName

                From ParentFriend pf
                Join Parent pa on pa.Id = pf.FriendAId
                Join Parent pb on pb.Id = pf.FriendBId
                Where pa.Id = @id OR pb.Id = @id;
                 ";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    var myFriends = new List<ParentFriend>();
                    while (reader.Read())
                    {
                        myFriends.Add(new ParentFriend()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FriendAId = DbUtils.GetInt(reader, "FriendAId"),
                            FriendBId = DbUtils.GetInt(reader, "FriendBId"),
                            ParentA = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "ParentAId"),
                                ParentFirebaseUid = DbUtils.GetString(reader, "ParentAFirebaseUid"),
                                FirstName = DbUtils.GetString(reader, "ParentAFirstName"),
                                LastName = DbUtils.GetString(reader, "ParentALastName"),
                            },
                            ParentB = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "ParentAId"),
                                ParentFirebaseUid = DbUtils.GetString(reader, "ParentBFirebaseUid"),
                                FirstName = DbUtils.GetString(reader, "ParentBFirstName"),
                                LastName = DbUtils.GetString(reader, "ParentBLastName"),
                            }
                        });
                    }

                        reader.Close();

                        return myFriends;
                    }
                }
            }

        }
    }


