
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, CardImg } from "reactstrap";
import img from "../teddyimage.png"
import { removeFriend } from "../../modules/friendshipManager";
import { Link } from 'react-router-dom';


const FriendCard = ({ handleUnfriend, friend }) => {

    console.log(friend)
    return (
        <Card className="m-2 p-2 w-25 mx-auto">
            <CardImg className="m-2 mx-auto" src={img}></CardImg>
            < CardBody className="m-3" >
                <h5>{friend.friend.firstName} {friend.friend.lastName}</h5>
                <Button outline color="secondary" onClick={() => handleUnfriend(friend.friendId, friend.userId)}>Unfriend</Button>
            </ CardBody >
        </Card >
    );
}

export default FriendCard