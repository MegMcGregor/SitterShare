import React from "react";
import { Card, CardBody } from "reactstrap";
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
            <Card className="m-2 p-2 w-50 mx-auto">
                < CardBody className="m-3" >
                    <div className="profile-container">
                        <h2 className="text-center">{user.firstName + " " + user.lastName}</h2>
                        <p>{user.address} {user.city}, {user.State} {user.zipcode}</p>
                        <p>{user.numberOfKids} kids</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                        <button>
                            <Link to={`/parentprofile/edit/${user.id}`}>Edit My Profile</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export default ParentUserProfile;

