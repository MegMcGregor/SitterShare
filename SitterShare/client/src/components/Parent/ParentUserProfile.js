import React from "react";
import { Card, CardBody, Button, CardTitle } from "reactstrap";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import { getCurrentUser } from "../../modules/parentManager";

const ParentUserProfile = () => {
    const [user, setUser] = useState([]);

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

    const GetMyParentUserProfile = () => {
        getCurrentUser()
            .then(user => setUser(user))
    }

    useEffect(() => {
        GetMyParentUserProfile()

    }, []);

    return (
        <>
            <h2 style={titleFontFamily} className="text-center">My Profile</h2>
            <Card className="m-3 mx-auto card border-0 shadow-sm" style={{ width: "40%" }}>
                <CardTitle style={fontFamily} tag="h4" className="text-center mt-5">{user.firstName + " " + user.lastName}</CardTitle>
                < CardBody className="mx-auto">
                    <p style={subTextFontFamily}>{user.address} {user.city}, {user.state} {user.zipcode}</p>
                    <p style={subTextFontFamily}>{user.numberOfKids} kids</p>
                    <p style={subTextFontFamily}>{user.phone}</p>
                    <p style={subTextFontFamily}>{user.email}</p>
                </CardBody>
                <Button className="border-0 w-25 mx-auto" style={{ backgroundColor: "#22B499", fontFamily: 'Poppins', border: 0, letterSpacing: 1, textDecoration: 'none', color: 'white', marginBottom: 50 }}>
                    <Link to={`/parentprofile/edit/${user.id}`} style={{ textDecoration: 'none', color: 'white' }}>edit my profile</Link>
                </Button>
            </Card>
        </>
    );
};

export default ParentUserProfile;

