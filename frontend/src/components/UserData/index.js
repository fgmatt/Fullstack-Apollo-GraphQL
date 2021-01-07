import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFINDBYID } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import Footer from "../Elements/Footer";
import { rHome, rEmail, rStartSite, rPassword } from "../RoutesName";

function UserData() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  const userIdToken = sessionStorage.getItem("token");

  const userfindById = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (userfindById.error) {
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
      <div className="container">
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
      <Footer />
    </div>
  );
}

export default UserData;
