import React, { useState, useEffect } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import img from "../teddyimage.png"
import { useHistory } from "react-router";

export const GlobalParentCard = ({ parent }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-2 w-25 mx-auto">
            <CardImg top width="100%" src={img}></CardImg>
            <CardTitle className="text-center" tag="h4">{parent.firstName} {parent.lastName}</CardTitle>
            <Button className="m-3" outline color="secondary">
                <Link to={`/findfriends/details/${parent.id}`} style={{ textDecoration: 'none', color: 'black' }}>view profile</Link>
            </Button>
        </Card >
    );
}

export default GlobalParentCard;