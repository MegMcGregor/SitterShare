
import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, CardImg, CardTitle, CardText } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';

const BabysitterCard = ({ babysitter }) => {

    const fontFamily = {
        fontFamily: 'Poppins',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "#666666"
    }

    const subTextFontFamily = {
        fontFamily: 'Poppins',
        letterSpacing: 1,
        color: "#666666"
    }

    return (
        <Card className="m-4 w-25 card border-0 shadow-sm">
            <CardImg top width="100%" src={img}></CardImg>
            < CardBody>
                <CardTitle style={fontFamily} tag="h4">{babysitter.babysitter.firstName} {babysitter.babysitter.lastName}</CardTitle>
                <CardText style={subTextFontFamily}>{babysitter.babysitter.email}</CardText>
                <CardText style={subTextFontFamily}>{babysitter.babysitter.phone}</CardText>
            </CardBody >
            <Button className="border-0 m-3 mx-auto" style={{ width: "80%", backgroundColor: "#22B499" }}>
                <Link to={`/MySitterList/details/${babysitter.babysitter.id}`} style={{ fontFamily: 'Poppins', letterSpacing: 1, textDecoration: 'none', color: 'white' }}>view details</Link>
            </Button>
        </Card >
    );
}

export default BabysitterCard

