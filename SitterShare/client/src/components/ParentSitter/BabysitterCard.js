
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, CardImg, CardTitle, CardText } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    return (
        <Card className="m-2 p-2 w-25 mx-auto">
            <CardImg top width="100%" src={img}></CardImg>
            < CardBody>
                <CardTitle tag="h5">{babysitter.babysitter.firstName} {babysitter.babysitter.lastName}</CardTitle>
                <CardText>{babysitter.babysitter.email}</CardText>
                <CardText>{babysitter.babysitter.phone}</CardText>
                <Button outline color="secondary">
                    <Link to={`/MySitterList/details/${babysitter.babysitter.id}`} style={{ textDecoration: 'none', color: 'black' }}>view details</Link>
                </Button>
            </CardBody >
        </Card >
    );
}

export default BabysitterCard

