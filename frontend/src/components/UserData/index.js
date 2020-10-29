import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";
import { rHome, rEmail, rStartSite, rPassword } from "../RoutesName";

function UserData() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  console.log(userIdSession);

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
    sessionStorage.removeItem("userId");
  }
  return (
    <div>
      <div className="header_usp">
        <div className="div_userdata">
          <h1>Benutzerdaten</h1>
        </div>
        <div>
          <p className="logout">
            <Link to={rHome} onClick={handleLink}>
              Logout
            </Link>
          </p>
        </div>
      </div>
      <div className="div_udlinks">
        <p className="linkData">
          <Link to={rStartSite}>Zurück</Link>
        </p>
        <InputButton
          className="buttonData div_button"
          onClick={handleEmail}
          value="Email ändern"
        />
        <InputButton
          className="buttonData div_button"
          onClick={handlePassword}
          value="Passwort ändern"
        />
      </div>
    </div>
  );
}

export default UserData;
