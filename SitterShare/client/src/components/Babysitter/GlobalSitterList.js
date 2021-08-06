import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
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
            <div className="col m-2 p-2 justify-content-center">
                {sitters.map((sitter) => (
                    <GlobalSitterCard sitter={sitter} key={sitter.id} />
                ))}
            </div>
        </>
    );
};

export default GlobalSittersList;