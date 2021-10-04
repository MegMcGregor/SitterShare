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

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666',
    }

    const fontFamily = {
        fontFamily: 'Poppins',
        fontWeight: "bold",
        letterSpacing: 2,
        color: "#666666"
    }

    const subTextFontFamily = {
        fontFamily: 'Poppins',
        letterSpacing: 1,
        color: "#666666"
    }

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
        <>
            <h2 style={titleFontFamily} className="text-center">Add {sitter.firstName} to My Sitter List</h2>
            <Card className="m-2 border-0 shadow-sm mx-auto" style={{ width: "40%" }}>
                <CardImg className="m-2 w-50 mx-auto" src={img}></CardImg>
                < CardBody className="mx-auto mb-4" style={{ width: "90%" }}>
                    <h4 style={fontFamily}>
                        <strong>{sitter.firstName} {sitter.lastName}</strong>
                    </h4>
                    <p style={subTextFontFamily}><strong>Bio :</strong> {sitter.bio}</p>
                    <p style={subTextFontFamily}><strong>Age Group :</strong> {sitter.isMinor ? "18 & under" : "18 years +"}</p>
                    <p style={subTextFontFamily}><strong>Zipcode :</strong> {sitter.zipcode}</p>
                    <p style={subTextFontFamily}><strong>CPR Certified :</strong> {sitter.isCprCertified ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Valid Driver's Lisence :</strong> {sitter.hasDriversLisence ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Reliable Transportation :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Experience with infants :</strong> {sitter.hasTransportation ? "yes" : "no"}</p>
                    <Button style={{ width: "50%", backgroundColor: "#22B499", fontFamily: 'Poppins', border: 0, letterSpacing: 1, textDecoration: 'none', color: 'white' }} onClick={handleAdd}>add sitter to my list</Button>
                </CardBody >
            </Card >
            {/* <div className="back-button">
                <Button className="m-2" outline color="secondary" onClick={() => history.goBack()}>go back</Button>
            </div> */}
        </>
    )
}

export default GlobalSitterDetailCard