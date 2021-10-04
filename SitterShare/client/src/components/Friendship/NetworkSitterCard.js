
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const NetworkSitterCard = ({ babysitter }) => {

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


    return (
        <Card className="m-4 w-50 border-0 shadow-sm mx-auto">
            <CardBody className="mx-auto mt-4" style={{ width: "90%" }}>
                <h4 className="mb-4" style={fontFamily}>{babysitter.sitterConnection.babysitter.firstName} {babysitter.sitterConnection.babysitter.lastName}</h4>
                <p style={subTextFontFamily}><strong>Bio :</strong> {babysitter.sitterConnection.babysitter.bio}</p>
                <p style={subTextFontFamily}><strong>Age Group :</strong> {babysitter.sitterConnection.babysitter.isMinor ? "18 & under" : "18 years +"}</p>
                <p style={subTextFontFamily}><strong>Phone :</strong> {babysitter.sitterConnection.babysitter.phone}</p>
                <p style={subTextFontFamily}><strong>Email :</strong> {babysitter.sitterConnection.babysitter.email}</p>
                <p style={subTextFontFamily}><strong>Zipcode :</strong> {babysitter.sitterConnection.babysitter.zipcode}</p>
                <p style={subTextFontFamily}><strong>CPR Certified :</strong> {babysitter.sitterConnection.babysitter.isCprCertified ? "yes" : "no"}</p>
                <p style={subTextFontFamily}><strong>Valid Driver's Lisence :</strong> {babysitter.sitterConnection.babysitter.hasDriversLisence ? "yes" : "no"}</p>
                <p style={subTextFontFamily}><strong>Reliable Transportation :</strong> {babysitter.sitterConnection.babysitter.hasTransportation ? "yes" : "no"}</p>
                <p style={subTextFontFamily}><strong>Experience with infants :</strong> {babysitter.sitterConnection.babysitter.hasTransportation ? "yes" : "no"}</p>
            </CardBody >
            <div className="mt-6" style={{ backgroundColor: "#50ACE4", height: "25%" }}>
                <h5 style={{ fontWeight: 'bold', fontFamily: 'Poppins', letterSpacing: 3, color: 'white' }} className="p-4">{babysitter.friend.firstName} {babysitter.friend.lastName} recommends {babysitter.sitterConnection.babysitter.firstName}</h5>
            </div>
        </Card >
    );
}

export default NetworkSitterCard