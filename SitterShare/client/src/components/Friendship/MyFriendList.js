import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { removeFriend } from "../../modules/friendshipManager"
import { useParams } from "react-router";
import { getCurrentUsersFriends } from "../../modules/friendshipManager";
import FriendCard from "./FriendCard";

const MyFriendList = () => {
    const [friends, setFriends] = useState([]);

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666'
    }

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

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">My Friends</h2>
            <div className="d-flex flex-wrap w-75 mx-auto">
                {friends.map((friend) => (
                    <FriendCard friend={friend} key={friend.id} handleUnfriend={handleUnfriend} />
                ))}
            </div>


        </>
    );
};

export default MyFriendList

