import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getCurrentUser } from "../../modules/parentManager";

const ParentUserProfile = () => {
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
            <div className="profile-container">
                <h2 className="text-center">{user.firstName + " " + user.lastName}</h2>
                <h3>contact</h3>
                <p>{user.address} {user.city}, {user.State} {user.zipcode}</p>
                <p>{user.numberOfKids} kids</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
            </div>
        </>
    );
};

export default ParentUserProfile;

