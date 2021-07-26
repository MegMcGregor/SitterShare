USE [SitterShare];
GO

set identity_insert [UserType] on
insert into [UserType] ([Id], [Name]) VALUES (1, 'Parent'), (2, 'Babysitter');
set identity_insert [UserType] off

set identity_insert [Parent] on
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (1, 'nOYorBphfhZpQpzEfgldB9cauHy2', 1, 'Suzanna', 'Smith', '1640 Riverside Drive', 'Nashville', 'Tennessee', 37215, '123-456-7890', 'suzanna@myfakePhone.com', 2);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (2, 'iWVh6rFLpcYjnAq7ggARCfPZtIx1', 1, 'Noelle', 'Nelson', '1882 Gerard Street', 'Nashville', 'Tennessee', 37215, '234-567-8901', 'noelle@mommyblogger.com', 3);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (3, 'kvUkQlsxf3ewo02SQvMYXC14grx2', 1, 'Jasmine', 'Jones', '4 Privet Drive', 'Nashville', 'Tennessee', 37215, '444-555-7777', 'jasmine@me.com', 2);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (4, 'iglvFuTMpscVN2b4VLeaRc8J1OB3', 1, 'Tamera', 'Thompson', '1313 Mockingbird Lane', 'Nashville', 'Tennessee', 37215, '777-000-1111', 'tamera@myfakecompany.com', 1);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (5, 'IvMceAzqxYTG1i70DiFA7TRWYal1', 1, 'Evie', 'Ellsworth', '344 Clinton St., Apt. 3B', 'Nashville', 'Tennessee', 37215, '234-432-2344', 'evie@localbusiness.com', 1);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (6, '8hcRP4PGHDRubzxlbLJIhnyCnXd2', 1, 'Holly', 'Harrison', '350 Fifth Avenue', 'Nashville', 'Tennessee', 37215, '111-111-1111', 'holly@me.com', 2);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (7, 'm0s3qR4ZM8X9xHmq1yR1D05yifL2', 1, 'Roxanne', 'Rogers', ' 17 Cherry Tree Lane', 'Nashville', 'Tennessee', 37215, '555-333-9999', 'roxanne@myfakePhone.com', 3);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (8, 'D8RFEY7RiChQMdtGORjgXBHZQZu1', 1, 'Gwyneth', 'Griswald', '698 Sycamore Road', 'Nashville', 'Tennessee', 37215, '987-765-4321', 'gwenyth@goop.com', 4);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (9, 'fjUDpOkN73TMFrdekt5Lm2CXmDK2', 1, 'Stella', 'Simpson', '742 Evergreen Terrace', 'Nashville', 'Tennessee', 37215, '123-000-1234', 'stella@localbusiness.com', 5);
insert into Parent (Id, ParentFirebaseUID, UserTypeId, FirstName, LastName, Address, City, State, Zipcode, Phone, Email, NumberOfKids) values (10, 'fyoft6mlPwVz5WhVFJB3dIGQ72Y2', 1, 'Naomi', 'Nelson', '4222 Clinton Way', 'Nashville', 'Tennessee', 37215, '123-000-1234', 'naomi@me.com', 5);
set identity_insert [Parent] off

set identity_insert [Babysitter] on
insert into Babysitter (Id, SitterFirebaseUID, UserTypeId, FirstName, LastName, Minor, Zipcode, Phone, Email, Bio, IsCprCeritified, HasDriversLisence, HasTransportation, HasInfantExperience) values (1, 'UAB19HAToIfcAeC5rMvaRv0nigp1', 2, 'Kristy', 'Thomas', 1, 37215, '876-543-2109', 'kristy@babysittersclub.com', 'Founder and president of the Baby-sitters Club. Known for starting meetings right on time. I can stay out until 9:30 on weeknights and 10:00 on weekends.', 1, 0, 0, 1);
insert into Babysitter (Id, SitterFirebaseUID, UserTypeId, FirstName, LastName, Minor, Zipcode, Phone, Email, Bio, IsCprCeritified, HasDriversLisence, HasTransportation, HasInfantExperience) values (2, 'k9WoNKoHuHOFcpAbLuxTESU2tr83', 2, 'Audrey', 'Anderson', 0, 37212, '098-765-4321', 'audrey@babysittersclub.com', 'Nannied professionally for three years, now I babysit on nights and weekends', 1, 1, 1, 1);
insert into Babysitter (Id, SitterFirebaseUID, UserTypeId, FirstName, LastName, Minor, Zipcode, Phone, Email, Bio, IsCprCeritified, HasDriversLisence, HasTransportation, HasInfantExperience) values (3, 'pVmMYDeVfDNzWgoVBpRDHRHov8i2', 2, 'Karen', 'Kemp', 1, 37203, '654-321-0987', 'karen@babysittersclub.com', 'Organized and nurturing highschool student who loves kids. I can watch your kids after 4pm on weekdays and on weekends.', 1, 1, 0, 1);
insert into Babysitter (Id, SitterFirebaseUID, UserTypeId, FirstName, LastName, Minor, Zipcode, Phone, Email, Bio, IsCprCeritified, HasDriversLisence, HasTransportation, HasInfantExperience) values (4, 'UxEENmVGHEdgQ5LmzV73EZsGDlc2', 2, 'Mary', 'Poppins', 0, 37212, '901-234-5678', 'mary@babysittersclub.com', 'Practically perfect in every way. Rosy cheeks, no warts. Plus, I play games, all sorts!', 1, 1, 1, 1);
insert into Babysitter (Id, SitterFirebaseUID, UserTypeId, FirstName, LastName, Minor, Zipcode, Phone, Email, Bio, IsCprCeritified, HasDriversLisence, HasTransportation, HasInfantExperience) values (5, 'pVmMYDeVfDNzWgoVBpRDHRHov8i2', 2, 'Arielle', 'Addams', 0, 37205, '123-098-7654', 'arielle@babysittersclub.com', 'Mature, dependable and high-energy babysitter with a passion for childcare excellence.', 0, 1, 1, 1);
set identity_insert [Babysitter] off

set identity_insert [ParentFriend] on
insert into [ParentFriend] ([Id], [FriendAId], [FriendBId]) VALUES (1,1,2), (2,2,3), (3,3,4), (4,4,5), (5,5,6), (6,6,7), (7,7,8), (8,8,9), (9,9,10), (10,10,2), (11,9,3), (12,8,4), (13,7,5), (14,6,7), (15,5,8), (16,4,9), (17,3,10), (18,2,9), (19,1,8), (20,10,7)
set identity_insert [ParentFriend] off


set identity_insert [ParentSitter] on
insert into [ParentSitter] ([Id], [isConnectionAuthorized], [ParentId], [BabysitterId]) VALUES (1,1,2,3), (2,1,3,4), (3,1,4,5), (4,1,5,2), (5,0,6,1), (6,1,7,5), (7,1,8,4), (8,0,9,3), (9,1,2,3), (10,1,7,1), (11,1,10,2)
set identity_insert [ParentFriend] off


