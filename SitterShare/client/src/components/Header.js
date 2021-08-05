import React, { useState, useContext } from 'react';
import { userTypeContext } from "../modules/UserTypeProvider";
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { logout } from "../modules/authManager";

export default function Header({ isLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isParent, setIsParent] = useState();
    const toggle = () => setIsOpen(!isOpen);
    const { userType } = useContext(userTypeContext)

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RRNavLink} to="/">SitterShare</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {userType && isLoggedIn ?
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/findfriends">Find Friends</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/findsitters">Find Sitters</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/myfriendlist">My Friends</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/mysitterlist">My Babysitters</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/sittersinmynetwork">Sitters in My Network</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/ParentProfile">My Account</NavLink>
                                </NavItem>
                                <NavItem>
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                                </NavItem>
                            </> : null
                        }
                        {isLoggedIn && !userType ?
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/">Home</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink tag={RRNavLink} to="/">My Clients</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/BabysitterProfile">My Account</NavLink>
                                </NavItem>
                                {/* <NavItem>
                                    <NavLink tag={RRNavLink} to="/">Edit My Profile</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                                </NavItem>
                            </> : null
                        }
                        {!isLoggedIn &&
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/loginParent">Parent Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/loginBabysitter">Babysitter Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/registerParent" exact>Register as a parent</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/registerBabysitter" exact>Register as a babysitter</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar >
        </div >
    );
}