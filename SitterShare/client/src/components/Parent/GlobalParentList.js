import React, { useEffect, useState } from "react";
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
        <div className="m-3">
            <div className="container">
                <div className="row m-3 justify-content-center">
                    {parents.map((parent) => (
                        <GlobalParentCard parent={parent} key={parent.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalParentsList;