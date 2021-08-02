import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentUsersFriends } from "../../modules/friendshipManager";
import FriendCard from "./FriendCard";

const MyFriendList = () => {
    const [friends, setFriends] = useState([]);


    const GetMyFriendList = () => {
        getCurrentUsersFriends()
            .then(friends => setFriends(friends))
    }

    useEffect(() => {
        GetMyFriendList()
    }, []);

    { console.log(friends) }

    return (
        <>
            <h2 className="text-center">My Friend List</h2>
            <div className="col m-2 p-2 justify-content-center">
                {friends.map((friend) => (
                    <FriendCard friend={friend} key={friend.friendId} />
                ))}
            </div>
        </>
    );
};

export default MyFriendList

