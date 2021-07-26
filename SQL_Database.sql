USE [master]

IF db_id('SitterShare') IS NULl
  CREATE DATABASE [SitterShare]
GO

USE [SitterShare]
GO


DROP TABLE IF EXISTS [Parent];
DROP TABLE IF EXISTS [UserType];
DROP TABLE IF EXISTS [Babysitter];
DROP TABLE IF EXISTS [ParentFriend];
DROP TABLE IF EXISTS [ParentSitter];
GO

CREATE TABLE [UserType] (
  [Id] integer PRIMARY KEY IDENTITY,
  [Name] nvarchar(20) NOT NULL
)


CREATE TABLE [Parent] (
  [Id] integer PRIMARY KEY IDENTITY,
  [ParentFirebaseUID] nvarchar(28) NOT NULL,
  [UserTypeId] integer NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255) NOT NULL,
  [Address] nvarchar(255) NOT NULL,
  [City] nvarchar(255) NOT NULL,
  [State] nvarchar(255) NOT NULL,
  [Zipcode] integer NOT NULL,
  [Phone] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [NumberOfKids] integer NOT NULL,

  CONSTRAINT [FK_Parent_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
  CONSTRAINT UQ_ParentFirebaseUID UNIQUE(ParentFirebaseUID)
)
GO

CREATE TABLE [Babysitter] (
  [Id] integer PRIMARY KEY IDENTITY,
  [SitterFirebaseUID] nvarchar(28) NOT NULL,
  [UserTypeId] integer NOT NULL,
  [FirstName] nvarchar(255) NOT NULL,
  [LastName] nvarchar(255) NOT NULL,
  [Minor] bit NOT NULL,
  [ZipCode] integer NOT NULL,
  [Phone] nvarchar(255) NOT NULL,
  [Email] nvarchar(255) NOT NULL,
  [Bio] text NOT NULL,
  [IsCprCeritified] bit NOT NULL,
  [HasDriversLisence] bit NOT NULL,
  [HasTransportation] bit NOT NULL,
  [HasInfantExperience] bit NOT NULL,

  CONSTRAINT [FK_Babysitter_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [UserType] ([Id]),
  CONSTRAINT UQ_SitterFirebaseUID UNIQUE(SitterFirebaseUID)
)
GO

CREATE TABLE [ParentFriend] (
  [Id] integer PRIMARY KEY IDENTITY,
  [FriendAId] integer NOT NULL,
  [FriendBId] integer NOT NULL,

  CONSTRAINT [FK_ParentFriend_FriendA] FOREIGN KEY ([FriendAId]) REFERENCES [Parent] ([Id]),
  CONSTRAINT [FK_ParentFriend_FriendB] FOREIGN KEY ([FriendBId]) REFERENCES [Parent] ([Id])
)
GO

CREATE TABLE [ParentSitter] (
  [Id] integer PRIMARY KEY IDENTITY,
  [isConnectionAuthorized] bit,
  [ParentId] integer NOT NULL,
  [BabysitterId] integer NOT NULL,

  CONSTRAINT [FK_ParentSitter_Parent] FOREIGN KEY ([ParentId]) REFERENCES [Parent] ([Id]),
  CONSTRAINT [FK_ParentSitter_Babysitter] FOREIGN KEY ([BabysitterId]) REFERENCES [Babysitter] ([Id]),

)
GO