import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { register } from "../modules/authManager";

export default function CreateBabysitterProfile() {

    return (
        <Card>
            <CardBody>
                <Form onSubmit={registerClick}>
                    <fieldset>
                        <FormGroup>
                            <Label htmlFor="firstName">first name</Label>
                            <Input id="firstName" type="text" autoFocus onChange={e => setFirstName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="firstName">last name</Label>
                            <Input id="lastName" type="text" autoFocus onChange={e => setLastName(e.target.value)} />
                        </FormGroup>
                        <option>Select an age group?</option>
                        <select id="isMinor">
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
                            <Label htmlFor="phone">phone</Label>
                            <Input id="phone" type="text" autoFocus onChange={e => setPhone(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">email</Label>
                            <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
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
                            <Label for="email">email</Label>
                            <Input id="email" type="text" onChange={e => setEmail(e.target.value)} />
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
                    </fieldset>
                </Form>
            </CardBody>
        </Card>