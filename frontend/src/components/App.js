import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login";
import NewLogin from "./NewLogin";
import UserSpace from "./UserSpace";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/NeuerBenutzer">
              <NewLogin />
            </Route>
            <Route path="/Benutzerbereich">
              <UserSpace />
            </Route>
            <Route path="/email">
              <ChangeEmail />
            </Route>
            <Route path="/password">
              <ChangePassword />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
