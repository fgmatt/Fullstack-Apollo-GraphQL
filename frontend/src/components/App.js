import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NewLogin from "./NewLogin";
import UserSpace from "./UserSpace";

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
          </Switch>
        </div>
      </Router>
    );
  }
}

// const App = () => {
//   return (

//   )
// }

export default App;
