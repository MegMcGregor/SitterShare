import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import GlobalParentCard from './GlobalParentCard';
import { getAllParents } from "../../modules/parentManager";


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
            <div className="col m-2 p-2 justify-content-center">
                {parents.map((parent) => (
                    <GlobalParentCard parent={parent} key={parent.id} />
                ))}
            </div>
        </>
    );
};

export default GlobalParentsList;