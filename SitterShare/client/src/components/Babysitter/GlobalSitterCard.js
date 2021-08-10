import React, { useState, useEffect } from "react";
import { Card, CardBody, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export const GlobalSitterCard = ({ sitter }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            <CardBody className="m-3">
                <p><b>Name: </b>{sitter.firstName} {sitter.lastName}</p>
                <p><b>Bio: </b>{sitter.bio}</p>
                <div>
                    <Button outline color="secondary">
                        <Link to={`/findsitters/details/${sitter.id}`}>view details</Link>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default GlobalSitterCard;