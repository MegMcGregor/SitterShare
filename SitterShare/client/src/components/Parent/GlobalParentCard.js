import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

export const GlobalParentCard = ({ parent }) => {
    ///add a handle add sitter here and implement onClick in the button

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            <CardBody className="m-3">
                <p><b>Name: </b>{parent.firstName} {parent.lastName}</p>
                <div>
                    <Button outline color="secondary">
                        <Link to={`/findfriends/details/${parent.id}`}>view profile</Link>
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default GlobalParentCard;