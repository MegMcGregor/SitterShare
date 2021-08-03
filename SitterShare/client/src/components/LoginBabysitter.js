import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { loginBabysitter } from "../modules/authManager";

export default function LoginBabysitter() {
    const history = useHistory();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        loginBabysitter(email, password)
            .then(() => history.push("/"))
            .catch(() => alert("Login Failed"));
    };

    return (
        <Form onSubmit={loginSubmit}>
            <fieldset>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Button>Login</Button>
                </FormGroup>
                <em>
                    Not registered? <Link to="registerBabysitter">Register</Link>
                </em>
            </fieldset>
        </Form>
    );
}