import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { removeFriend } from "../../modules/friendshipManager"
import { useParams } from "react-router";
import { getCurrentUsersFriends } from "../../modules/friendshipManager";
import FriendCard from "./FriendCard";

const MyFriendList = () => {
    const [friends, setFriends] = useState([]);

    const GetMyFriendList = () => {
        getCurrentUsersFriends()
            .then(friends => setFriends(friends))
    }

    const handleUnfriend = (friendId, userId) => {
        if (window.confirm('Are you sure you want to unfriend')) {
            removeFriend(friendId, userId)
                .then(() => GetMyFriendList())
        }
    };

    useEffect(() => {
        GetMyFriendList()
    }, []);

    { console.log(friends) }

    return (
        <>
            <h2 className="text-center">My Friends</h2>
            <div className="col m-2 p-2 justify-content-center">
                {friends.map((friend) => (
                    <FriendCard friend={friend} key={friend.id} handleUnfriend={handleUnfriend} />
                ))}
            </div>


        </>
    );
};

export default MyFriendList

