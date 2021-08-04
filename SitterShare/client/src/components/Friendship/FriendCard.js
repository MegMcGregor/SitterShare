
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {

    return (
        <Card >
            < CardBody >
                <p>{friend.friend.firstName} {friend.friend.lastName}</p>
                <button>Remove</button>
            </ CardBody >
        </Card >
    );
}

export default FriendCard