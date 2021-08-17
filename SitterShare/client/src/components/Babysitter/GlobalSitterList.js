import React, { useEffect, useState } from "react";
import { Card, CardBody, Row } from "reactstrap";
import GlobalSitterCard from './GlobalSitterCard';
import { getAllBabysitters } from "../../modules/babysitterManager"


const GlobalSittersList = () => {
    const [sitters, setSitters] = useState([]);

    const getSitters = () => {
        getAllBabysitters().then(sitters => setSitters(sitters));
    };

    useEffect(() => {
        getSitters();
    }, []);

    return (
        <>
            <h2 className="text-center">Search for Babysitters</h2>
            <div className="container">
                <div className="col-xs-1">
                    {sitters.map((sitter) => (
                        <GlobalSitterCard sitter={sitter} key={sitter.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default GlobalSittersList;