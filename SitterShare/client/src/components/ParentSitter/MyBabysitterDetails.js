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
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
                <p>
                    <strong>Name: {babysitter.firstName} {babysitter.lastName}</strong>
                </p>
                <p><strong>Bio :</strong> {babysitter.bio}</p>
                <p><strong>Age Group :</strong> {babysitter.isMinor ? "18 & under" : "18 years +"}</p>
                <p><strong>Phone :</strong> {babysitter.phone}</p>
                <p><strong>Email :</strong> {babysitter.email}</p>
                <p><strong>Zipcode :</strong> {babysitter.zipcode}</p>
                <p><strong>CPR Certified :</strong> {babysitter.isCprCertified ? "yes" : "no"}</p>
                <p><strong>Valid Driver's Lisence :</strong> {babysitter.hasDriversLisence ? "yes" : "no"}</p>
                <p><strong>Reliable Transportation :</strong> {babysitter.hasTransportation ? "yes" : "no"}</p>
                <p><strong>Experience with infants :</strong> {babysitter.hasTransportation ? "yes" : "no"}</p>
            </CardBody >
            <Button outline color="secondary" onClick={handleDelete}>Remove From My Babysitter List</Button>
        </Card >
    )

}

export default MyBabysitterDetail