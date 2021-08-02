import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import MySitterList from "./ParentSitter/MySitterList";
import NetworkSitterList from "./Friendship/NetworkSitterList";
import MyFriendList from "./Friendship/MyFriendList";
import ParentUserProfile from "./Parent/ParentUserProfile";
import Register from "./RegisterParent";

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

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <Register />
                </Route>

                <Route path="/MySitterList">
                    {isLoggedIn ? <MySitterList /> : <Redirect to="/login" />}
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