import React, { useEffect, useState } from "react";
import GlobalSitterCard from './GlobalSitterCard';
import { getAllBabysitters } from "../../modules/babysitterManager";


const GlobalSittersList = () => {
    const [sitters, setSitters] = useState([]);

    const getSitters = () => {
        getAllBabysitters().then(sitters => setSitters(sitters));
    };

    useEffect(() => {
        getSitters();
    }, []);

    return (
        <div className="m-3">
            <div className="container">
                <div className="row m-3 justify-content-center">
                    {sitters.map((sitter) => (
                        <GlobalSitterCard sitter={sitter} key={sitter.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalSittersList;