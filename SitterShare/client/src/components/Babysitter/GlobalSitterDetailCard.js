import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getBabysitterById } from "../../modules/babysitterManager";
import { addNewSitterConnection } from "../../modules/parentSitterManager"
import { Link } from "react-router-dom";

export const GlobalSitterDetailCard = () => {

    const { id } = useParams();
    const [sitter, setSitter] = useState({});
    const history = useHistory();


    const handleAdd = () => {
        debugger
        let newParentSitterConnection = {
            parentId: 0,
            babysitterId: sitter.id,
        }
        addNewSitterConnection(newParentSitterConnection).then(() => history.push("/findsitters"));
    }

    const getSitterDeltails = () => {
        getBabysitterById(id)
            .then(setSitter)
    }

    useEffect(() => {
        getSitterDeltails();
    }, []);

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3">
                <p>
                    <strong>Name: {sitter.firstName} {sitter.lastName}</strong>
                </p>
                <p><strong>Bio :</strong> {sitter.bio}</p>
                <p><strong>Age Group :</strong> {sitter.isMinor ? "18 & under" : "18 years +"}</p>
                <p><strong>Zipcode :</strong> {sitter.zipcode}</p>
                <p><strong>CPR Certified :</strong> {sitter.isCprCertified ? "yes" : "no"}</p>
                <p><strong>Valid Driver's Lisence :</strong> {sitter.hasDriversLisence ? "yes" : "no"}</p>
                <p><strong>Reliable Transportation :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
                <p><strong>Experience with infants :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
            </CardBody >
            <button onClick={handleAdd}>Add Sitter to My List</button>
            <button onClick={() => history.goBack()}>back</button>
        </Card >
    )
}

export default GlobalSitterDetailCard