import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";
import { rMainSpace, rHome, rPhilosophers } from "../RoutesName";

export default function Miscellaneous() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  function handleButtonClick(event) {
    event.preventDefault();
    history.push(rPhilosophers);
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
          onClick={(e) => handleButtonClick(e)}
        />
      </div>
    </div>
  );
}
