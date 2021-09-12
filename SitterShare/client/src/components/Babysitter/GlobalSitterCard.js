import React, { useState, useEffect } from "react";
import { CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Card, CardBody, Button } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export const GlobalSitterCard = ({ sitter }) => {
    ///add a handle add sitter here and implement onClick in the button
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
            <CardImg top width="100%" src={img} alt="usericon" />
            <CardBody>
                <CardTitle style={fontFamily} tag="h4">{sitter.firstName} {sitter.lastName}</CardTitle>
                <CardText style={subTextFontFamily}>{sitter.bio}</CardText>
            </CardBody >
            <Button className="border-0 m-3 mx-auto" style={{ width: "80%", backgroundColor: "#22B499" }}>
                <Link to={`/findsitters/details/${sitter.id}`} style={{ fontFamily: 'Poppins', letterSpacing: 1, textDecoration: 'none', color: 'white' }}>view profile</Link>
            </Button>
        </Card >
    );
}

export default GlobalSitterCard;