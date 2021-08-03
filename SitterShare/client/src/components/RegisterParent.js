import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { registerParent } from "../modules/authManager";
import { userTypeContext } from "../modules/UserTypeProvider"

export default function RegisterParent() {
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [usertypeId, setUserTypeId] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zipcode, setZipcode] = useState();
    const [numberOfKids, setNumberOfKids] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const { setUserType } = useContext(userTypeContext)

    const registerClick = (e) => {
        e.preventDefault();
        if (password && password !== confirmPassword) {
            alert("Passwords don't match. Do better.");
        } else {
            const parentUserProfile = { firstName, lastName, address, city, state, zipcode, UserTypeId: 1, numberOfKids, email, phone };
            registerParent(parentUserProfile, password)
                .then(() => {
                    setUserType(true)
                    history.push("/")
                });
        }
    };

    return (
        <Form onSubmit={registerClick}>
            <FormGroup>
                <Label htmlFor="firstName">first name</Label>
                <Input id="firstName" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="firstName">last name</Label>
                <Input id="lastName" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="address">address</Label>
                <Input id="address" type="text" autoFocus onChange={e => setAddress(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="city">city</Label>
                <Input id="city" type="text" autoFocus onChange={e => setCity(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="state">state</Label>
                <Input id="state" type="text" autoFocus onChange={e => setState(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="zipcode">zipcode</Label>
                <Input id="zipcode" type="text" autoFocus onChange={e => setZipcode(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="numberOfKids">number of kids</Label>
                <Input id="numberOfKids" type="number" autoFocus onChange={e => setNumberOfKids(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="phone">phone number</Label>
                <Input id="phone" type="text" autoFocus onChange={e => setPhone(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="email">email</Label>
                <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="password">password</Label>
                <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="confirmPassword">confirm password</Label>
                <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Button>Register</Button>
            </FormGroup>
        </Form>
    )
}