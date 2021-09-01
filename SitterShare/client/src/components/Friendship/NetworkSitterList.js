import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getNetworkSitters } from "../../modules/friendshipManager";
import NetworkSitterCard from "./NetworkSitterCard";

const MySitterList = () => {
    const [babysitters, setBabysitters] = useState([]);


    const GetMySitterList = () => {
        getNetworkSitters()
            .then(babysitters => setBabysitters(babysitters))
    }

    useEffect(() => {
        GetMySitterList()
    }, []);

    return (
        <>
            <h2 className="text-center">Sitters in My Network</h2>
            <div className="d-flex flex-wrap w-75 mx-auto">
                {babysitters.map((babysitter) => (
                    <NetworkSitterCard babysitter={babysitter} key={babysitter.sitterConnection.babysitter.id} />
                ))}
            </div>
        </>
    );
};

export default MySitterList