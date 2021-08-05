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
                            State = DbUtils.GetString(reader, "state"),
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

        public List<Parent> GetAll()
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
                    WHERE userTypeId=1
                    ";

                    var reader = cmd.ExecuteReader();

                    var parents = new List<Parent>();
                    while (reader.Read())
                    {
                        parents.Add(new Parent()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            ParentFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
                            UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                            FirstName = DbUtils.GetString(reader, "firstname"),
                            LastName = DbUtils.GetString(reader, "lastname"),
                            Address = DbUtils.GetString(reader, "address"),
                            City = DbUtils.GetString(reader, "city"),
                            State = DbUtils.GetString(reader, "state"),
                            Zipcode = DbUtils.GetInt(reader, "zipcode"),
                            Email = DbUtils.GetString(reader, "email"),
                            Phone = DbUtils.GetString(reader, "phone"),
                            NumberOfKids = DbUtils.GetInt(reader, "numberofkids"),

                        });
                    }

                    reader.Close();

                    return parents;
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
                                    City, State, ZipCode, Phone, Email, NumberOfKids)
                                    OUTPUT INSERTED.ID
                                    VALUES (@ParentFirebaseUid, @userTypeId, @FirstName, @LastName, @Address,
                                           @City, @State, @Zipcode, @Phone, @email, @NumberofKids)";
                    DbUtils.AddParameter(cmd, "@ParentFirebaseUId", parentUserProfile.ParentFirebaseUid);
                    DbUtils.AddParameter(cmd, "@UserTypeId", parentUserProfile.UserTypeId);
                    DbUtils.AddParameter(cmd, "@FirstName", parentUserProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", parentUserProfile.LastName);
                    DbUtils.AddParameter(cmd, "@Address", parentUserProfile.Address);
                    DbUtils.AddParameter(cmd, "@City", parentUserProfile.City);
                    DbUtils.AddParameter(cmd, "@State", parentUserProfile.State);
                    DbUtils.AddParameter(cmd, "@Zipcode", parentUserProfile.Zipcode);
                    DbUtils.AddParameter(cmd, "@Phone", parentUserProfile.Phone);
                    DbUtils.AddParameter(cmd, "@Email", parentUserProfile.Email);
                    DbUtils.AddParameter(cmd, "@NumberOfKids", parentUserProfile.NumberOfKids);

                    parentUserProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public Parent GetParentById(int id)
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
                    WHERE p.Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();
                    Parent parent = null;

                    if (reader.Read())
                    {
                        if (parent == null) ;
                        {
                            parent = new Parent()
                            {
                                Id = DbUtils.GetInt(reader, "id"),
                                ParentFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
                                UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
                                FirstName = DbUtils.GetString(reader, "firstname"),
                                LastName = DbUtils.GetString(reader, "lastname"),
                                Address = DbUtils.GetString(reader, "address"),
                                City = DbUtils.GetString(reader, "city"),
                                State = DbUtils.GetString(reader, "state"),
                                Zipcode = DbUtils.GetInt(reader, "zipcode"),
                                Email = DbUtils.GetString(reader, "email"),
                                Phone = DbUtils.GetString(reader, "phone"),
                                NumberOfKids = DbUtils.GetInt(reader, "numberofkids"),
                            };
                        }

                    }
                    reader.Close();
                    return parent;
                }
            }

        }

        public void Update(Parent parent)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Parent
                           SET 
                               FirstName=@firstName,
                               LastName=@lastName,
                               Address=@ddress,
                               City=@city,
                               State=@state,
                               Zipcode=@zipcode,
                               Phone=@phone,
                               NumberOfKids=@numberofkids
                         WHERE Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", parent.Id);
                    DbUtils.AddParameter(cmd, "@ParentFirebaseUid", parent.ParentFirebaseUid);
                    DbUtils.AddParameter(cmd, "@UserTypeId", parent.UserTypeId);
                    DbUtils.AddParameter(cmd, "@FirstName", parent.FirstName);
                    DbUtils.AddParameter(cmd, "@Address", parent.Address);
                    DbUtils.AddParameter(cmd, "@City", parent.City);
                    DbUtils.AddParameter(cmd, "@State", parent.State);
                    DbUtils.AddParameter(cmd, "@Zipcode", parent.Zipcode);
                    DbUtils.AddParameter(cmd, "@Phone", parent.Phone);
                    DbUtils.AddParameter(cmd, "@Email", parent.Email);
                    DbUtils.AddParameter(cmd, "@NumberOfKids", parent.NumberOfKids);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        //public List<Parent> SearchForParentsByName(string criterion)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //            SELECT
        //            p.Id, 
        //            p.parentFireBaseUId, 
        //            p.UserTypeId,
        //            p.FirstName, 
        //            p.LastName, 
        //            p.Address, 
        //            p.City,
        //            p.State,
        //            p.Zipcode,
        //            p.Phone,
        //            p.Email,
        //            p.NumberOfKids
        //            From Parent p
        //            WHERE p.[firstName] LIKE @Criterion
        //            ORDER BY p.[firstName] DESC";
        //            DbUtils.AddParameter(cmd, "@Criterion", $"%{criterion}%");
        //            var reader = cmd.ExecuteReader();
        //            var parents = new List<Parent>();
        //            while (reader.Read())
        //            {
        //                parents.Add(new Parent()
        //                {
        //                    Id = DbUtils.GetInt(reader, "id"),
        //                    ParentFirebaseUid = DbUtils.GetString(reader, "parentfirebaseuid"),
        //                    UserTypeId = DbUtils.GetInt(reader, "usertypeid"),
        //                    FirstName = DbUtils.GetString(reader, "firstname"),
        //                    LastName = DbUtils.GetString(reader, "lastname"),
        //                    Address = DbUtils.GetString(reader, "address"),
        //                    City = DbUtils.GetString(reader, "city"),
        //                    Zipcode = DbUtils.GetInt(reader, "zipcode"),
        //                    Email = DbUtils.GetString(reader, "email"),
        //                    Phone = DbUtils.GetString(reader, "phone"),
        //                    NumberOfKids = DbUtils.GetInt(reader, "numberofkids")
        //                });
        //            }

        //            reader.Close();
        //            return parents;
        //        }
        //    }
        //}

    }
}