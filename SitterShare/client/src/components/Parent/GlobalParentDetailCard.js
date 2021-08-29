import React from "react";
import { Card, CardBody, Button, CardImg } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getParentById } from "../../modules/parentManager";
import { addFriendship } from "../../modules/friendshipManager"
import img from "../teddyimage.png"
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
            <Card className="m-2 w-25 mx-auto">
                <CardImg top width="100%" src={img}></CardImg>
                < CardBody className="m-3">
                    <h5>
                        <strong>{parent.firstName} {parent.lastName}</strong>
                    </h5>
                    <p>{parent.city}, {parent.state}</p>
                    <Button className="m-2" outline color="secondary" onClick={handleAdd}>Add Friend to My List</Button>
                    <Button className="m-2" outline color="secondary" onClick={() => history.goBack()}>Back</Button>
                </CardBody >
            </Card >
        </div>
    )
}

export default GlobalParentDetailCard