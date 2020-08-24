import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NewLogin from "./NewLogin";
import UserSpace from "./UserSpace";
import MainSpace from "./MainSpace";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";
import Scientists from "./Scientists";
import NewScientist from "./NewScientist";
import ChangeScientist from "./ChangeScientist";
import Philosophers from "./Philosophers";
import UserData from "./UserData";
import Miscellaneous from "./Miscellaneous";
import NoMatch from "./NoMatch";
import {
  rHome,
  rNewLogin,
  rUserSpace,
  rMainSpace,
  rUserData,
  rScientists,
  rNewScientist,
  rChangeScientist,
  rEmail,
  rPassword,
  rMiscelleanous,
  rPhilosophers,
  rError,
} from "./RoutesName";
import "./style.css";
import Philosopher from "./Elements/Philosopher";

function App() {
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
          <Route path={rEmail}>
            <ChangeEmail />
          </Route>
          <Route path={rPassword}>
            <ChangePassword />
          </Route>
          <Route path={rNewScientist}>
            <NewScientist />
          </Route>
          <Route path={rChangeScientist}>
            <ChangeScientist />
          </Route>
          <Route path={rScientists}>
            <Scientists />
          </Route>
          <Route path={rUserSpace}>
            <UserSpace />
          </Route>
          <Route path={rUserData}>
            <UserData />
          </Route>
          <Route path={rPhilosophers}>
            <Philosophers />
          </Route>
          <Route path={rMiscelleanous}>
            <Miscellaneous />
          </Route>
          <Route path={rMainSpace}>
            <MainSpace />
          </Route>
          <Route path={rError}>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
