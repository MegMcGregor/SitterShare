import React, { useEffect, useState } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
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

    return (
        <>
            <h2 className="text-center">Search for Friends</h2>
            <Container id="container">
                <div className="justify-content-center">
                    {parents.map((parent) => (
                        <GlobalParentCard parent={parent} key={parent.id} />
                    ))}
                </div>
            </Container>
        </>
    );
};

export default GlobalParentsList;