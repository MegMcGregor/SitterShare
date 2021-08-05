
import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';

const NetworkSitterCard = ({ babysitter }) => {

    return (
        <Card >
            < CardBody >
                <p>
                    <h3>{babysitter.friend.firstName} recommends {babysitter.sitterConnection.babysitter.firstName}</h3>
                    <h4>{babysitter.sitterConnection.babysitter.firstName} {babysitter.sitterConnection.babysitter.lastName}</h4>
                    <p><strong>Bio :</strong> {babysitter.sitterConnection.babysitter.bio}</p>
                    <p><strong>Age Group :</strong> {babysitter.sitterConnection.babysitter.isMinor ? "18 & under" : "18 years +"}</p>
                    <p><strong>Phone :</strong> {babysitter.sitterConnection.babysitter.phone}</p>
                    <p><strong>Email :</strong> {babysitter.sitterConnection.babysitter.email}</p>
                    <p><strong>Zipcode :</strong> {babysitter.sitterConnection.babysitter.zipcode}</p>
                    <p><strong>CPR Certified :</strong> {babysitter.sitterConnection.babysitter.isCprCertified ? "yes" : "no"}</p>
                    <p><strong>Valid Driver's Lisence :</strong> {babysitter.sitterConnection.babysitter.hasDriversLisence ? "yes" : "no"}</p>
                    <p><strong>Reliable Transportation :</strong> {babysitter.sitterConnection.babysitter.hasTransportation ? "yes" : "no"}</p>
                    <p><strong>Experience with infants :</strong> {babysitter.sitterConnection.babysitter.hasTransportation ? "yes" : "no"}</p>

                </p>
            </CardBody >
        </Card >
    );
}

export default NetworkSitterCard