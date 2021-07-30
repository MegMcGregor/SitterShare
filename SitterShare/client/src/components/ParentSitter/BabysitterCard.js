
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    return (
        <Card >
            < CardBody >
                <p>
                    <strong>{babysitter.FirstName}{babysitter.LastName}</strong>
                </p>
                <p>{babysitter.email}</p>
                <p>{babysitter.phone}</p>
                <button>
                    <Link to={`/babysitter/details/${babysitter.id}`}>view details</Link>
                </button>
            </CardBody >
        </Card >
    );
}

export default BabysitterCard

