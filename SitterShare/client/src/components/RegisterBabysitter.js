import React, { useState, useContext } from "react";
import { userTypeContext } from "../modules/UserTypeProvider";
import { Button, Form, FormGroup, Label, Input, CardBody, Card } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { registerBabysitter } from "../modules/authManager";

export default function RegisterBabysitter() {
    const history = useHistory();
    const { setUserType } = useContext(userTypeContext)
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [zipcode, setZipcode] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [bio, setBio] = useState();
    const [isCprCertified, setIsCprCertified] = useState();
    const [hasDriversLisence, setHasDriversLisence] = useState();
    const [hasTransportation, setHasTransportation] = useState();
    const [hasInfantExperience, setHasInfantExperience] = useState();
    const [isMinor, setIsMinor] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const userProfile = { firstName, lastName, isMinor, zipcode, phone, email, bio, isCprCertified, hasTransportation, hasDriversLisence, hasInfantExperience };
            registerBabysitter(userProfile, password)
                .then(() => {
                    setUserType(false);
                    history.push("/")
                });

        }
    };

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
                <h2>Create A Profile</h2>
                <Form onSubmit={registerClick}>
                    <fieldset>
                        <FormGroup>
                            <Label htmlFor="firstName">first name</Label>
                            <Input id="firstName" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastName">last name</Label>
                            <Input id="lastName" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
                        </FormGroup>
                        <option id="isMinor" onChange={e => setIsMinor(e.target.value)}>Select an age group?</option>
                        <select>
                            <option value={true}>Under 18 years old</option>
                            <option value={false}>18 years +</option>
                        </select>
                        <FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="zipcode">zipcode</Label>
                            <Input id="zipcode" type="text" autoFocus onChange={e => setZipcode(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="bio">bio</Label>
                            <Input id="bio" type="text" autoFocus onChange={e => setBio(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="phone">phone number</Label>
                            <Input id="phone" type="text" autoFocus onChange={e => setPhone(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <option id="isCprCertified" autoFocus onChange={e => setIsCprCertified(e.target.value)}>Are you CPR Certified?</option>
                            <select>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <option id="hasDriversLisence" autoFocus onChange={e => setHasDriversLisence(e.target.value)}>Do you have a valid drivers lisence?</option>
                            <select>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <option id="hasTransportation" autoFocus onChange={e => setHasTransportation(e.target.value)}>Do you have reliable transportation?</option>
                            <select>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <option id="hasInfantExperience" autoFocus onChange={e => setHasInfantExperience(e.target.value)}>Do you have experience with infants?</option>
                            <select>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Button>Register</Button>
                        </FormGroup>
                    </fieldset>
                </Form>
            </CardBody>
        </Card>
    );
}