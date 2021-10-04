import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getNetworkSitters } from "../../modules/friendshipManager";
import NetworkSitterCard from "./NetworkSitterCard";

const MySitterList = () => {
    const [babysitters, setBabysitters] = useState([]);

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666'
    }

    const GetMySitterList = () => {
        getNetworkSitters()
            .then(babysitters => setBabysitters(babysitters))
    }

    useEffect(() => {
        GetMySitterList()
    }, []);

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">Babysitters in My Network</h2>
            <div className="mx-auto">
                {babysitters.map((babysitter) => (
                    <NetworkSitterCard babysitter={babysitter} key={babysitter.sitterConnection.babysitter.id} />
                ))}
            </div>
        </>
    );
};

export default MySitterList