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

    { console.log(babysitters) }

    return (
        <>
            <h2 className="text-center">My Sitter List</h2>
            <div className="col m-2 p-2 justify-content-center">
                {babysitters.map((babysitter) => (
                    <NetworkSitterCard babysitter={babysitter} key={babysitter.sitterConnection.babysitter.id} />
                ))}
            </div>
        </>
    );
};

export default MySitterList