
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, CardImg, CardTitle, CardText } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    return (
        <Card className="m-4 w-25 card border-0 shadow-sm">
            <CardImg top width="100%" src={img}></CardImg>
            < CardBody>
                <CardTitle tag="h5">{babysitter.babysitter.firstName} {babysitter.babysitter.lastName}</CardTitle>
                <CardText>{babysitter.babysitter.email}</CardText>
                <CardText>{babysitter.babysitter.phone}</CardText>
            </CardBody >
            <Button className="border-0 m-3 w-75 mx-auto" style={{ backgroundColor: "#22B499", opacity: 0.8 }}>
                <Link to={`/MySitterList/details/${babysitter.babysitter.id}`} style={{ textDecoration: 'none', color: 'white' }}>view details</Link>
            </Button>
        </Card >
    );
}

export default BabysitterCard

