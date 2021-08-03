
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    { console.log(babysitter.babysitter.firstName) }
    return (
        <Card >
            < CardBody >
                <p>
                    <strong>{babysitter.babysitter.firstName}{babysitter.babysitter.lastName}</strong>
                </p>
                <p>{babysitter.babysitter.email}</p>
                <p>{babysitter.babysitter.phone}</p>
                <button>
                    <Link to={`/MySitterList/details/${babysitter.babysitter.id}`}>view details</Link>
                </button>
            </CardBody >
        </Card >
    );
}

export default BabysitterCard

