import React, { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import img from "../teddyimage.png"
import { useHistory } from "react-router";

export const GlobalParentCard = ({ parent }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-4 w-25 card border-0 shadow-sm">
            <CardImg top width="100%" src={img}></CardImg>
            <CardBody>
                <CardTitle className="text-center" tag="h4">{parent.firstName} {parent.lastName}</CardTitle>
            </CardBody>
            <Button className="border-0 m-3 w-75 mx-auto" style={{ backgroundColor: "#22B499", opacity: 0.8 }}>
                <Link to={`/findfriends/details/${parent.id}`} style={{ textDecoration: 'none', color: 'white' }}>view profile</Link>
            </Button>
        </Card >
    );
}

export default GlobalParentCard;