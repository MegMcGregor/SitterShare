import React from "react";
import { Card, CardBody, Button, CardTitle } from "reactstrap";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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

    return (
        <>
            <h2 className="text-center">My Profile</h2>
            <Card className="m-3 mx-auto card border-0 shadow-sm" style={{ width: "40%" }}>
                <CardTitle tag="h5" className="text-center mt-5">{user.firstName + " " + user.lastName}</CardTitle>
                < CardBody className="mx-auto">
                    <p>{user.address} {user.city}, {user.state} {user.zipcode}</p>
                    <p>{user.numberOfKids} kids</p>
                    <p>{user.phone}</p>
                    <p>{user.email}</p>
                </CardBody>
                <Button className="border-0 w-50 mx-auto" style={{ backgroundColor: "#22B499", opacity: 0.8, marginBottom: 50 }}>
                    <Link to={`/parentprofile/edit/${user.id}`} style={{ textDecoration: 'none', color: 'white' }}>Edit My Profile</Link>
                </Button>
            </Card>
        </>
    );
};

export default ParentUserProfile;

