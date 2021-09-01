
import React, { useState, useEffect } from "react";
import { Card, CardTitle, CardBody, Button, CardImg } from "reactstrap";
import img from "../teddyimage.png"
import { removeFriend } from "../../modules/friendshipManager";
import { Link } from 'react-router-dom';


const FriendCard = ({ handleUnfriend, friend }) => {

    console.log(friend)
    return (
        <Card className="m-4 w-25 card border-0 shadow-sm">
            <CardImg className="m-2 mx-auto" src={img}></CardImg>
            <CardBody>
                <CardTitle className="text-center" tag="h4"> {friend.friend.firstName} {friend.friend.lastName}</CardTitle>
            </CardBody>
            <Button className="border-0 m-3 w-75 mx-auto" style={{ backgroundColor: "#22B499", opacity: 0.8 }} onClick={() => handleUnfriend(friend.friendId, friend.userId)}>Unfriend</Button>
        </Card >
    );
}

export default FriendCard