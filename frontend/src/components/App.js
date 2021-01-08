import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Login, NewLogin, ChangeEmail, ChangePassword } from "./User";
import UserSpace from "./UserSpace";
import StartSite from "./StartSite";
import {
  ScientistsProtected,
  ScientistsPublic,
  NewScientist,
  ChangeScientist,
} from "./Scientists";
import { PhilosophersProtected, PhilosophersPublic } from "./Philosophers";
import UserData from "./UserData";
import Miscellaneous from "./Miscellaneous";
import Countries from "./Countries";
import MemoryGame from "./MemoryGame";
import NoMatch from "./NoMatch";
import {
  rHome,
  rLogin,
  rNewLogin,
  rUserSpace,
  rStartSite,
  rUserData,
  rScientists,
  rNewScientist,
  rChangeScientist,
  rEmail,
  rPassword,
  rMiscelleanous,
  rPhilosophers,
  rCountries,
  rMemoryGames,
  rError,
} from "./RoutesName";
import "./style.css";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path={rHome}>
            <Home />
          </Route>
          <Route path={rLogin}>
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
            <ScientistsProtected />
          </Route>
          <Route path={rUserSpace}>
            <UserSpace />
          </Route>
          <Route path={rUserData}>
            <UserData />
          </Route>
          <Route path={rMemoryGames}>
            <MemoryGame />
          </Route>
          <Route path={rCountries}>
            <Countries />
          </Route>
          <Route path={rPhilosophers}>
            <PhilosophersProtected />
          </Route>
          <Route path={rMiscelleanous}>
            <Miscellaneous />
          </Route>
          <Route path={rStartSite}>
            <StartSite />
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
