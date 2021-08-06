import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { loginBabysitter } from "../modules/authManager";
import { userTypeContext } from "../modules/UserTypeProvider";

export default function LoginBabysitter() {
    const history = useHistory();

    const [email, setEmail] = useState()
    const { setUserType } = useContext(userTypeContext)
    const [password, setPassword] = useState();

    const loginSubmit = (e) => {
        e.preventDefault();
        loginBabysitter(email, password)
            .then(() => {
                setUserType(false)
                history.push("/babysitterhome")
            })
            .catch(() => alert("Login Failed"));
    };

    return (
        <Card className="m-2 p-2 w-50 mx-auto">
            < CardBody className="m-3" >
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
                            <Button outline color="secondary">Login</Button>
                        </FormGroup>
                        <em>
                            Not registered? <Link to="registerBabysitter">Register</Link>
                        </em>
                    </fieldset>
                </Form>
            </CardBody>
        </Card>
    );
}