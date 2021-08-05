
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { removeFriend } from "../../modules/friendshipManager";
import { Link } from 'react-router-dom';


const FriendCard = ({ handleUnfriend, friend }) => {

    console.log(friend)
    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
                <p>{friend.friend.firstName} {friend.friend.lastName}</p>
                <button onClick={() => handleUnfriend(friend.friendId, friend.userId)}>Unfriend</button>
            </ CardBody >
        </Card >
    );
}

export default FriendCard