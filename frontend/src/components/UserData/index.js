import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";

function UserData() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  function handleEmail() {
    history.push("/email");
  }

  function handlePassword() {
    history.push("/password");
  }

  function handleLink() {
      sessionStorage.removeItem("userId")
  }
  return (
    <div>
      <div>
        <h1>Benutzerdaten</h1>
        <p className="logout">
          <Link to="/" onClick={handleLink}>Logout</Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/Hauptbereich">Zurück</Link>
        </p>
        <InputButton onClick={handleEmail} value="Email ändern" />
        <InputButton onClick={handlePassword} value="Passwort ändern" />
      </div>
    </div>
  );
}

export default UserData;
