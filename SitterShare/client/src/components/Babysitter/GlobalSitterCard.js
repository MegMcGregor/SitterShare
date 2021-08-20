import React, { useState, useEffect } from "react";
import { CardGroup, CardImg, CardTitle, CardSubtitle, CardText, Card, CardBody, Button } from "reactstrap";
import img from "../teddyimage.png"
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export const GlobalSitterCard = ({ sitter }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-2 w-25 mx-auto">
            <CardImg top width="100%" src={img} alt="usericon" />
            <CardBody>
                <CardTitle tag="h5">{sitter.firstName} {sitter.lastName}</CardTitle>
                <CardText>{sitter.bio}</CardText>
                <Button outline color="secondary">
                    <Link to={`/findsitters/details/${sitter.id}`} style={{ textDecoration: 'none', color: 'black' }}>view details</Link>
                </Button>
            </CardBody >
        </Card >
    );
}

export default GlobalSitterCard;