import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { getParentById, updateParentProfile } from "../../modules/parentManager";
import { useHistory, useParams } from "react-router-dom";

const EditParentProfile = () => {

    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const history = useHistory();


    const handleInputChange = (evt) => {
        const stateToChange = { ...profile }
        const value = evt.target.value;
        const key = evt.target.id;

        stateToChange[key] = value;
        setProfile(stateToChange);
    };


    const handleUpdate = (evt) => {
        evt.preventDefault();
        setIsLoading(true);

        const editedProfile = {
            id: id,
            ParentFirebaseUid: editedProfile.ParentFirebaseUid,
            UserTypeId: editedProfile.UserTypeId,
            FirstName: editedProfile.FirstName,
            LastName: editedProfile.LastName,
            Address: editedProfile.Address,
            City: editedProfile.City,
            State: editedProfile.State,
            Zipcode: editedProfile.Zipcode,
            Phone: editedProfile.Phone,
            Email: editedProfile.Email,
            NumberOfKids: editedProfile.NumberOfKids
        };
        updateParentProfile(editedProfile)
            .then(() => {
                history.push(`/parentprofile`);
            });

    };

    useEffect(() => {
        getParentById(id)
            .then(p => {
                setProfile(p);
                setIsLoading(false)
            });
    }, [])

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
                <h2>Edit My Profile</h2>
                <Form>
                    <FormGroup>
                        <Label htmlFor="firstName">first name</Label>
                        <Input id="firstName" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="firstName">last name</Label>
                        <Input id="lastName" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">address</Label>
                        <Input id="address" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="city">city</Label>
                        <Input id="city" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="state">state</Label>
                        <Input id="state" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="zipcode">zipcode</Label>
                        <Input id="zipcode" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="numberOfKids">number of kids</Label>
                        <Input id="numberOfKids" type="number" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone">phone number</Label>
                        <Input id="phone" type="text" autoFocus onChange={handleInputChange} />
                    </FormGroup>
                    <Button onClick={handleUpdate}>Submit</Button>
                    <Button onClick={() => history.push(`/parentprofile`)}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default EditParentProfile;