import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentUser } from "../../modules/parentManager";

const MyParentUserProfile = () => {
    const [user, setUser] = useState([]);

    const GetMyParentUserProfile = () => {
        getCurrentUser()
            .then(user => setUser(user))
    }

    useEffect(() => {
        GetMyParentUserProfile()

    }, []);

    { console.log(user) }

    return (
        <>
            <h2 className="text-center">{user.firstName + " " + user.lastName}</h2>
        </>
    );
};

export default MyParentUserProfile;