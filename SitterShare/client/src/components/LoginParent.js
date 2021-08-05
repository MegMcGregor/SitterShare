import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, CardBody, Card } from 'reactstrap';
import { useHistory, Link } from "react-router-dom";
import { loginParent } from "../modules/authManager";
import { userTypeContext } from "../modules/UserTypeProvider";

export default function LoginParent() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { setUserType } = useContext(userTypeContext)

    const loginSubmit = (e) => {
        e.preventDefault();
        loginParent(email, password)
            .then(() => {
                setUserType(true)
                sessionStorage.setItem("userType", true)
                history.push("/")
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
                            <Button>Login</Button>
                        </FormGroup>
                        <em>
                            Not registered? <Link to="registerParent">Register</Link>
                        </em>
                    </fieldset>
                </Form>
            </CardBody>
        </Card>
    );
}