import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import MySitterList from "./ParentSitter/MySitterList";
import NetworkSitterList from "./Friendship/NetworkSitterList";
import MyFriendList from "./Friendship/MyFriendList";
import ParentUserProfile from "./Parent/ParentUserProfile";
import Register from "./Register";

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
                    <MySitterList />
                </Route>

                <Route path="/myfriendlist">
                    <MyFriendList />
                </Route>

                <Route path="/ParentProfile">
                    <ParentUserProfile />
                </Route>

                <Route path="/SittersInMyNetwork">
                    <NetworkSitterList />
                </Route>

                {/* <Route path="/myclientlist">
                    <myClientList />
                </Route> */}
            </Switch>
        </main>
    );
};