import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getUsersBabysitterById } from "../../modules/parentSitterManager";
import { deleteSitterFromMyList } from "../../modules/parentSitterManager";
import { Link } from "react-router-dom";

export const MyBabysitterDetail = () => {
    const { id } = useParams();
    const [babysitter, setBabysitter] = useState({});
    const [babysitterDetails, setBabysitterDetails] = useState({})
    const history = useHistory();

    const titleFontFamily = {
        fontFamily: 'ABeeZee',
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#666666'
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


    const getMyBabysitterDetails = () => {
        getUsersBabysitterById(id)
            .then(res => {
                setBabysitter(res.babysitter)
                setBabysitterDetails(res)
            })
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to remove this sitter from your list?')) {
            deleteSitterFromMyList(id).then(() => {
                history.push(`/mysitterlist/`);
            });
        }
    };

    console.log(babysitter)

    useEffect(() => {
        getMyBabysitterDetails();
    }, []);


    return (
        <>
            <h2 style={titleFontFamily} className="text-center mb-4">{babysitter.firstName}'s Contact Info</h2>
            <Card className="m-2 border-0 shadow-sm mx-auto" style={{ width: "40%" }}>
                <CardBody className="mx-auto mb-4 mt-4" style={{ width: "90%" }}>
                    <h4 className="mb-4 text-center" style={fontFamily}>
                        <strong>{babysitter.firstName} {babysitter.lastName}</strong>
                    </h4>
                    <p style={subTextFontFamily}><strong>Bio :</strong> {babysitter.bio}</p>
                    <p style={subTextFontFamily}><strong>Age Group :</strong> {babysitter.isMinor ? "18 & under" : "18 years +"}</p>
                    <p style={subTextFontFamily}><strong>Phone :</strong> {babysitter.phone}</p>
                    <p style={subTextFontFamily}><strong>Email :</strong> {babysitter.email}</p>
                    <p style={subTextFontFamily}><strong>Zipcode :</strong> {babysitter.zipcode}</p>
                    <p style={subTextFontFamily}><strong>CPR Certified :</strong> {babysitter.isCprCertified ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Valid Driver's Lisence :</strong> {babysitter.hasDriversLisence ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Reliable Transportation :</strong> {babysitter.hasTransportation ? "yes" : "no"}</p>
                    <p style={subTextFontFamily}><strong>Experience with infants :</strong> {babysitter.hasTransportation ? "yes" : "no"}</p>
                    <Button style={{ width: "50%", backgroundColor: "#22B499", fontFamily: 'Poppins', border: 0, letterSpacing: 1, textDecoration: 'none', color: 'white' }} onClick={handleDelete}>remove from my sitter List</Button>
                </CardBody >
            </Card >
        </>
    )

}

export default MyBabysitterDetail