
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const NetworkSitterCard = ({ babysitter }) => {

    return (
        <Card >
            < CardBody >
                <p>
                    <strong>{babysitter.sitterConnection.babysitter.firstName}</strong>
                </p>
                <button>details</button>
            </CardBody >
        </Card >
    );
}

export default NetworkSitterCard