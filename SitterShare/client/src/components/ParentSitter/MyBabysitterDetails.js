import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { getUsersBabysitterById } from "../../modules/parentSitterManager";
import { Link } from "react-router-dom";

export const MyBabysitterDetail = () => {
    const { id } = useParams();
    const [babysitter, setBabysitter] = useState({});
    const [babysitterDetails, setBabysitterDetails] = useState({})
    const history = useHistory();

    const getMyBabysitterDetails = () => {
        getUsersBabysitterById(id)
            .then(res => {
                console.log(res)
                setBabysitter(res.babysitter)
                setBabysitterDetails(res)
            })
    }

    useEffect(() => {
        getMyBabysitterDetails();
    }, []);


    return (
        <Card >
            < CardBody >
                <p>
                    <strong>Name: {babysitter.firstName} {babysitter.lastName}</strong>
                </p>
                <p><strong>Bio :</strong>{babysitter.bio}</p>
                <button>Delete</button>
            </CardBody >
        </Card >
    )

}

export default MyBabysitterDetail