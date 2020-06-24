import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHouseUser,
  faUserCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

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
        <p>
          <Link onClick={handleLink} to="/">
            Logout
          </Link>
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faHouseUser}
          size="3x"
          onClick={handleHouseUser}
        />
        <FontAwesomeIcon icon={faFlask} size="3x" onClick={handleFlask} />
        <FontAwesomeIcon
          icon={faStickyNote}
          size="3x"
          onClick={handleStickyNote}
        />
      </div>
    </div>
  );
}

export default MainSpace;
