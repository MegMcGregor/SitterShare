
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3">
                <p>
                    <strong>{babysitter.babysitter.firstName} {babysitter.babysitter.lastName}</strong>
                </p>
                <p>{babysitter.babysitter.email}</p>
                <p>{babysitter.babysitter.phone}</p>
                <Button outline color="secondary">
                    <Link to={`/MySitterList/details/${babysitter.babysitter.id}`}>view details</Link>
                </Button>
            </CardBody >
        </Card >
    );
}

export default BabysitterCard

