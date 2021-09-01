import React from "react";
import { Card, CardBody, Button, CardImg } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getBabysitterById } from "../../modules/babysitterManager";
import { addNewSitterConnection } from "../../modules/parentSitterManager"
import img from "../teddyimage.png"
import { Link } from "react-router-dom";

export const GlobalSitterDetailCard = () => {

    const { id } = useParams();
    const [sitter, setSitter] = useState({});
    const history = useHistory();


    const handleAdd = () => {
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
        <div>
            <h2 className="text-center">Add {sitter.firstName} to My Sitter List</h2>
            <Card className="m-2 w-50 border-0 shadow-sm mx-auto">
                <CardImg className="m-2 w-50 mx-auto" src={img}></CardImg>
                < CardBody className="m-3">
                    <h5>
                        <strong>{sitter.firstName} {sitter.lastName}</strong>
                    </h5>
                    <p><strong>Bio :</strong> {sitter.bio}</p>
                    <p><strong>Age Group :</strong> {sitter.isMinor ? "18 & under" : "18 years +"}</p>
                    <p><strong>Zipcode :</strong> {sitter.zipcode}</p>
                    <p><strong>CPR Certified :</strong> {sitter.isCprCertified ? "yes" : "no"}</p>
                    <p><strong>Valid Driver's Lisence :</strong> {sitter.hasDriversLisence ? "yes" : "no"}</p>
                    <p><strong>Reliable Transportation :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
                    <p><strong>Experience with infants :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
                    <Button className="m-2" outline color="secondary" onClick={handleAdd}>Add Sitter to My List</Button>
                    <Button className="m-2" outline color="secondary" onClick={() => history.goBack()}>Back</Button>
                </CardBody >
            </Card >
        </div>
    )
}

export default GlobalSitterDetailCard