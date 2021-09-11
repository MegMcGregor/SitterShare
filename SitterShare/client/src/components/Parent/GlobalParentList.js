import React, { useEffect, useState } from "react";
import { Card, CardDeck, CardGroup, CardBody, Container, Row, Col } from "reactstrap";
import GlobalParentCard from './GlobalParentCard';
import { getAllParents } from "../../modules/parentManager";
import "./GlobalParentList.css"


const GlobalParentsList = () => {
    const [parents, setParents] = useState([]);

    const getParents = () => {
        getAllParents().then(parents => setParents(parents));
    };

    useEffect(() => {
        getParents();
    }, []);

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666'
    }

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">Search for Friends</h2>
            <CardDeck className="d-flex flex-wrap w-75 mx-auto">
                {parents.map((parent) => (
                    <GlobalParentCard parent={parent} key={parent.id} />
                ))}
            </CardDeck>
        </>
    );
};

export default GlobalParentsList;