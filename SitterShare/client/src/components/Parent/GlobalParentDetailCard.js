import React from "react";
import { Card, CardBody, Button, CardImg } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getParentById } from "../../modules/parentManager";
import { addFriendship } from "../../modules/friendshipManager"
import img from "../teddyimage.png"
import "./GlobalParentList.css"
import { Link } from "react-router-dom";

export const GlobalParentDetailCard = () => {

    const { id } = useParams();
    const [parent, setParent] = useState({});
    const history = useHistory();

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666',
    }

    const fontFamily = {
        fontFamily: 'Poppins',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "#666666"
    }

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
        <>
            <h2 style={titleFontFamily} className="text-center">Connect with {parent.firstName}</h2>
            <Card className="w-25 card border-0 shadow-sm mx-auto">
                <CardImg top width="100%" src={img}></CardImg>
                < CardBody className="mx-4 mb-4">
                    <h4 style={fontFamily}>
                        <strong>{parent.firstName} {parent.lastName}</strong>
                    </h4>
                    <p style={fontFamily}>{parent.city}, {parent.state}</p>
                    <Button style={{ width: "70%", backgroundColor: "#22B499", fontFamily: 'Poppins', border: 0, letterSpacing: 1, textDecoration: 'none', color: 'white' }} onClick={handleAdd}>add friend</Button>
                </CardBody >
            </Card >
            <div className="back-button">
                <Button outline color="secondary" style={{ fontFamily: 'Poppins', letterSpacing: 1, textDecoration: 'none', color: '#666666' }} onClick={() => history.goBack()}>go back</Button>
            </div>
        </>
    )
}

export default GlobalParentDetailCard