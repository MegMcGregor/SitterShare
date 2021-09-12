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

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666'
    }

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">Search for Babysitters</h2>
            <CardDeck className="d-flex flex-wrap w-75 mx-auto">
                {sitters.map((sitter) => (
                    <GlobalSitterCard sitter={sitter} key={sitter.id} />
                ))}
            </CardDeck>
        </>
    );
};

export default GlobalSittersList;