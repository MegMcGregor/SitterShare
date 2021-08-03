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

export default function ApplicationViews({ isLoggedIn }) {
    return (
        <main>
            <Switch>
                {/* <Route path="/" exact>
          {isLoggedIn ? <QuoteList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/add">
          {isLoggedIn ? <QuoteAddForm /> : <Redirect to="/login" />}
        </Route> */}

                <Route path="/loginParent">
                    <LoginParent />
                </Route>

                <Route path="/loginBabysitter">
                    <LoginBabysitter />
                </Route>

                <Route path="/registerParent">
                    <RegisterParent />
                </Route>

                <Route path="/registerBabysitter">
                    <RegisterBabysitter />
                </Route>

                <Route path="/MySitterList" exact>
                    {isLoggedIn ? <MySitterList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/MySitterList/details/:id(\d+)" exact>
                    {isLoggedIn ? <MyBabysitterDetail /> : <Redirect to="/login" />}
                </Route>

                <Route path="/myfriendlist">
                    {isLoggedIn ? <MyFriendList /> : <Redirect to="/login" />}
                </Route>

                <Route path="/ParentProfile">
                    {isLoggedIn ? <ParentUserProfile /> : <Redirect to="/login" />}
                </Route>

                <Route path="/SittersInMyNetwork">
                    {isLoggedIn ? <NetworkSitterList /> : <Redirect to="/login" />}
                </Route>

                {/* <Route path="/myclientlist">
                    <myClientList />
                </Route> */}
            </Switch>
        </main>
    );
};