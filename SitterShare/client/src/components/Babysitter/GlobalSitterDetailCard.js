import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getBabysitterById } from "../../modules/babysitterManager";
import { Link } from "react-router-dom";

export const GlobalSitterDetailCard = () => {

    const { id } = useParams();
    const [sitter, setSitter] = useState({});
    const history = useHistory();

    ///add an addSitterToMyListFunction
    ///Call on button onClick={handleAdd}

    const getSitterDeltails = () => {
        getBabysitterById(id)
            .then(setSitter)
    }

    useEffect(() => {
        getSitterDeltails();
    }, []);

    return (
        <Card >
            < CardBody >
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
            <button>Add Sitter to My List</button>
        </Card >
    )
}

export default GlobalSitterDetailCard