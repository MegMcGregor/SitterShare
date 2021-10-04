import React from "react";
import { Card, CardBody, CardDeck } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentUsersBabysitters } from "../../modules/parentSitterManager";
import BabysitterCard from "./BabysitterCard";

const MySitterList = () => {
    const [babysitters, setBabysitters] = useState([]);

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666',
    }

    const GetMySitterList = () => {
        getCurrentUsersBabysitters()
            .then(babysitters => setBabysitters(babysitters))
    }

    useEffect(() => {
        GetMySitterList()
    }, []);

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">My Babysitters</h2>
            <CardDeck className="d-flex flex-wrap w-75 mx-auto">
                {babysitters.map((babysitter) => (
                    <BabysitterCard babysitter={babysitter} key={babysitter.babysitterId} />
                ))}
            </CardDeck>
        </>
    );
};

export default MySitterList