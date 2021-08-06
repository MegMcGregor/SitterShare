import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getParentById } from "../../modules/parentManager";
import { addFriendship } from "../../modules/friendshipManager"
import { Link } from "react-router-dom";

export const GlobalParentDetailCard = () => {

    const { id } = useParams();
    const [parent, setParent] = useState({});
    const history = useHistory();


    const handleAdd = () => {
        let newFriendConnection = {
            userId: 0,
            friendId: parent.id,
        }
        addFriendship(newFriendConnection).then(() => history.push("/findfriends"));
    }

    const getParentDeltails = () => {
        getParentById(id)
            .then(setParent)
    }

    useEffect(() => {
        getParentDeltails();
    }, []);

    return (
        <div>
            <h2 className="text-center">Connect with {parent.firstName}</h2>
            <Card className="m-2 p-2 w-50 mx-auto">
                < CardBody className="m-3">
                    <h5>
                        <strong>{parent.firstName} {parent.lastName}</strong>
                    </h5>
                    <p><strong>City :</strong> {parent.city}</p>
                    <p><strong>State :</strong> {parent.state}</p>
                </CardBody >
                <Button outline color="secondary" onClick={handleAdd}>Add Friend to My List</Button>
                <p> </p>
                <Button outline color="secondary" onClick={() => history.goBack()}>Back</Button>
            </Card >
        </div>
    )
}

export default GlobalParentDetailCard