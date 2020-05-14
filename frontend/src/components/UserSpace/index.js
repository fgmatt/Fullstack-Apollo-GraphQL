import React from "react";
import { Link } from "react-router-dom";

class UserSpace extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Benutzerbereich</h1>
          <p>
            <Link to="/">Logout</Link>
          </p>
        </div>
        <div>
          <p>Benutzer ist eingeloggt als:</p>
          <p>example@email.ch</p>
        </div>
        <div>
            <p>
                <Link to="email">E-Mail ändern</Link>
            </p>
            <p>
                <Link to="password">Passwort ändern</Link>
            </p>
        </div>
      </div>
    );
  }
}

export default UserSpace;
