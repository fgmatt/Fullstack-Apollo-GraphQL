import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NewLogin from "./NewLogin";

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
