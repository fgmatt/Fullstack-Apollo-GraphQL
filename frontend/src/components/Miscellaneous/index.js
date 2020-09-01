import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";
import { rMainSpace, rHome, rPhilosophers, rCountries } from "../RoutesName";

export default function Miscellaneous() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  function handleButtonClickPhilosophen(event) {
    event.preventDefault();
    history.push(rPhilosophers);
  }

  function handleButtonClickLaender(event) {
    event.preventDefault();
    history.push(rCountries);
  }

  return (
    <div>
      <div className="headerMiscellaneous">
        <div>
          <h1>Sonstiges</h1>
        </div>
        <div>
          <p className="logout">
            <Link onClick={handleLink} to={rHome}>
              Logout
            </Link>
          </p>
        </div>
      </div>
      <div className="div_mlinks">
        <div>
          <p className="back">
            <Link to={rMainSpace}>Zurück</Link>
          </p>
        </div>
        <InputButton
          value="Philosophen"
          onClick={(e) => handleButtonClickPhilosophen(e)}
        />
         <InputButton
          className="countriesButton"
          value="Länder"
          onClick={(e) => handleButtonClickLaender(e)}
        />
      </div>
    </div>
  );
}
