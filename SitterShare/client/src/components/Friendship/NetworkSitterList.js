import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getNetworkSitters } from "../../modules/friendshipManager";
import NetworkSitterCard from "./NetworkSitterCard";

const MySitterList = () => {
    const [babysitters, setBabysitters] = useState([]);

    console.log(babysitters)


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
            <div className="col m-2 p-2 justify-content-center">
                {babysitters.map((babysitter) => (
                    <NetworkSitterCard babysitter={babysitter} key={babysitter.sitterConnection.babysitter.id} />
                ))}
            </div>
        </>
    );
};

export default MySitterList