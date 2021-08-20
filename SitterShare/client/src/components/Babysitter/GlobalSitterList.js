import React, { useEffect, useState } from "react";
import { CardDeck, CardBody, Row } from "reactstrap";
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
            <CardDeck className="justify-content-center">
                {sitters.map((sitter) => (
                    <GlobalSitterCard sitter={sitter} key={sitter.id} />
                ))}
            </CardDeck>
        </>
    );
};

export default GlobalSittersList;