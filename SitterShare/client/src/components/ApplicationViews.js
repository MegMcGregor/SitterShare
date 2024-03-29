import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginParent from "./LoginParent";
import MySitterList from "./ParentSitter/MySitterList";
import NetworkSitterList from "./Friendship/NetworkSitterList";
import MyFriendList from "./Friendship/MyFriendList";
import ParentUserProfile from "./Parent/ParentUserProfile";
import RegisterParent from "./RegisterParent";
import RegisterBabysitter from "./RegisterBabysitter";
import LoginBabysitter from "./LoginBabysitter";
import MyBabysitterDetail from "./ParentSitter/MyBabysitterDetails";
import GlobalSittersList from "./Babysitter/GlobalSitterList";
import GlobalSitterDetailCard from "./Babysitter/GlobalSitterDetailCard"
import GlobalParentList from "./Parent/GlobalParentList"
import GlobalParentDetailCard from "./Parent/GlobalParentDetailCard";
import EditParentProfile from "./Parent/EditUserProfile";
import BabysitterUserProfile from "./Babysitter/BabysitterUserProfile";
import BabysitterHome from "./BabysitterHome";
import Home from "./Home";

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>

                <Route path="/loginParent" exact>
                    <LoginParent />
                </Route>

                <Route path="/loginBabysitter" exact>
                    <LoginBabysitter />
                </Route>

                <Route path="/registerParent" exact>
                    <RegisterParent />
                </Route>

                <Route path="/registerBabysitter" exact>
                    <RegisterBabysitter />
                </Route>

                <Route path="/" exact>
                    {isLoggedIn ? <Home /> : <Redirect to="/login" />}
                </Route>

                <Route path="/MySitterList" exact>
                    {isLoggedIn ? <MySitterList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/babysitterhome" exact>
                    {isLoggedIn ? <BabysitterHome /> : <Redirect to="/login" />}
                </Route>

                <Route path="/MySitterList/details/:id(\d+)" exact>
                    {isLoggedIn ? <MyBabysitterDetail /> : <Redirect to="/login" />}
                </Route>

                <Route path="/myfriendlist">
                    {isLoggedIn ? <MyFriendList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/BabysitterProfile" exact>
                    {isLoggedIn ? <BabysitterUserProfile /> : <Redirect to="/login" />}
                </Route>

                <Route path="/ParentProfile" exact>
                    {isLoggedIn ? <ParentUserProfile /> : <Redirect to="/login" />}
                </Route>

                <Route path="/ParentProfile/Edit/:id(\d+)" exact>
                    {isLoggedIn ? <EditParentProfile /> : <Redirect to="/login" />}
                </Route>

                <Route path="/SittersInMyNetwork" exact>
                    {isLoggedIn ? <NetworkSitterList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/findsitters" exact>
                    {isLoggedIn ? <GlobalSittersList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/findsitters/details/:id(\d+)" exact>
                    {isLoggedIn ? <GlobalSitterDetailCard /> : <Redirect to="/login" />}
                </Route>

                <Route path="/findfriends" exact>
                    {isLoggedIn ? <GlobalParentList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/findfriends/details/:id(\d+)" exact>
                    {isLoggedIn ? <GlobalParentDetailCard /> : <Redirect to="/login" />}
                </Route>

            </Switch>
        </main>
    );
};