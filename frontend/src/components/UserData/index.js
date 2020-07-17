import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";
import { rHome, rEmail, rMainSpace, rPassword } from "../RoutesName";

function UserData() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  function handleEmail() {
    history.push(rEmail);
  }

  function handlePassword() {
    history.push(rPassword);
  }

  function handleLink() {
      sessionStorage.removeItem("userId")
  }
  return (
    <div>
      <div>
        <h1>Benutzerdaten</h1>
        <p className="logout">
          <Link to={rHome} onClick={handleLink}>Logout</Link>
        </p>
      </div>
      <div>
        <p className="linkData">
          <Link to={rMainSpace}>Zurück</Link>
        </p>
        <InputButton className="userDataButtonE div_button" onClick={handleEmail} value="Email ändern" />
        <InputButton className="userDataButtonP div_button" onClick={handlePassword} value="Passwort ändern" />
      </div>
    </div>
  );
}

export default UserData;
