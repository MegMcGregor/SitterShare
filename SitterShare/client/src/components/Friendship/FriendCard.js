
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {

    { console.log(friend) }

    return (
        <Card >
            < CardBody >
                <p>{friend.friendA.Name}</p>
            </ CardBody >
        </Card >
    );
}

export default FriendCard