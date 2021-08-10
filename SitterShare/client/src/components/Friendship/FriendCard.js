
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { removeFriend } from "../../modules/friendshipManager";
import { Link } from 'react-router-dom';


const FriendCard = ({ handleUnfriend, friend }) => {

    console.log(friend)
    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
                <h5>{friend.friend.firstName} {friend.friend.lastName}</h5>
                <Button outline color="secondary" onClick={() => handleUnfriend(friend.friendId, friend.userId)}>Unfriend</Button>
            </ CardBody >
        </Card >
    );
}

export default FriendCard