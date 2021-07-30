import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import MySitterList from "./ParentSitter/MySitterList";
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

                <Route path="/mysitterlist">
                    <MySitterList />
                </Route>

                <Route path="/myfriendlist">
                    <MyFriendList />
                </Route>

                <Route path="/myParentProfile">
                    <ParentUserProfile />
                </Route>
            </Switch>
        </main>
    );
};