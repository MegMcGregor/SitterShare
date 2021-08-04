import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentUsersBabysitters } from "../../modules/parentSitterManager";
import BabysitterCard from "./BabysitterCard";

const MySitterList = () => {
    const [babysitters, setBabysitters] = useState([]);


    const GetMySitterList = () => {
        getCurrentUsersBabysitters()
            .then(babysitters => setBabysitters(babysitters))
    }

    useEffect(() => {
        GetMySitterList()
    }, []);

    return (
        <>
            <h2 className="text-center">My Sitter List</h2>
            <div className="col m-2 p-2 justify-content-center">
                {babysitters.map((babysitter) => (
                    <BabysitterCard babysitter={babysitter} key={babysitter.babysitterId} />
                ))}
            </div>
        </>
    );
};

export default MySitterList