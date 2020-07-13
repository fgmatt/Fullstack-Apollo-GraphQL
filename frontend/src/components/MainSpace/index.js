import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHouseUser,
  faUserCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function MainSpace() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  console.log(userIdSession);

  function handleHouseUser() {
    history.push("/Benutzerdaten");
  }

  function handleFlask() {
    history.push("/scientists");
  }

  function handleStickyNote() {
    history.push("/some");
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  return (
    <div>
      <div>
        <h1>Hauptbereich</h1>
        <p className="logout">
          <Link onClick={handleLink} to="/">
            Logout
          </Link>
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          className="icons_fa"
          icon={faHouseUser}
          size="4x"
          onClick={handleHouseUser}
        />
        <FontAwesomeIcon
          className="icons_fa"
          icon={faFlask}
          size="4x"
          onClick={handleFlask}
        />
        <FontAwesomeIcon
          className="icons_fa"
          icon={faStickyNote}
          size="4x"
          onClick={handleStickyNote}
        />
      </div>
    </div>
  );
}

export default MainSpace;
