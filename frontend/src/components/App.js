import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NewLogin from "./NewLogin";
import UserSpace from "./UserSpace";
import MainSpace from "./MainSpace";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import Scientists from "./Scientists";
import NewScientist from "./NewScientist";
import UserData from "./UserData";
import NoMatch from "./NoMatch";
import {
  rHome,
  rNewLogin,
  rUserSpace,
  rMainSpace,
  rUserData,
  rScientists,
  rNewScientist,
  rEmail,
  rPassword,
  rError,
  rArray,
} from "./RoutesName";
import "./style.css"

class App extends Component {
  render() {
    for (let i = 0; i < rArray.length; i++) {
      let route = "http://localhost:3000" + rArray[i];

      if (window.location.href === route) {
        break;
      }
    }
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path={rHome}>
              <Login />
            </Route>
            <Route path={rNewLogin}>
              <NewLogin />
            </Route>
            <Route path={rUserSpace}>
              <UserSpace />
            </Route>
            <Route path={rMainSpace}>
              <MainSpace />
            </Route>
            <Route path={rUserData}>
              <UserData />
            </Route>
            <Route path={rEmail}>
              <ChangeEmail />
            </Route>
            <Route path={rPassword}>
              <ChangePassword />
            </Route>
            <Route path={rScientists}>
              <Scientists />
            </Route>
            <Route path={rNewScientist}>
              <NewScientist />
            </Route>
            <Route path={rError}>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
