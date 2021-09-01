import React, { useState, useEffect } from "react";
import { CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Card, CardBody, Button } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export const GlobalSitterCard = ({ sitter }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-4 w-25 card border-0 shadow-sm">
            <CardImg top width="100%" src={img} alt="usericon" />
            <CardBody>
                <CardTitle tag="h5">{sitter.firstName} {sitter.lastName}</CardTitle>
                <CardText>{sitter.bio}</CardText>
            </CardBody >
            <Button className="border-0 m-3 w-75 mx-auto" style={{ backgroundColor: "#22B499", opacity: 0.8 }}>
                <Link to={`/findsitters/details/${sitter.id}`} style={{ textDecoration: 'none', color: 'white' }}>view profile</Link>
            </Button>
        </Card >
    );
}

export default GlobalSitterCard;