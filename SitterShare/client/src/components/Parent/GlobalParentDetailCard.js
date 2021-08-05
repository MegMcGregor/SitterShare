import React from "react";
import { Card, CardBody } from "reactstrap";
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
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3">
                <p>
                    <strong>Name: {parent.firstName} {parent.lastName}</strong>
                </p>
                <p><strong>City :</strong> {parent.city}</p>
                <p><strong>State :</strong> {parent.state}</p>
            </CardBody >
            <button onClick={handleAdd}>Add Friend to My List</button>
            <button onClick={() => history.goBack()}>back</button>
        </Card >
    )
}

export default GlobalParentDetailCard