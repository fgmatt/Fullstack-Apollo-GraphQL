import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHouseUser,
  faUserCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { userId } from "../Login";

function MainSpace() {
  const history = useHistory();
  if (!userId) {
    history.push("/");
  }

  const [flask, setFlask] = useState("");
  const [houseUser, setHouseUser] = useState("");
  const [userCircle, setUserCircle] = useState("");
  const [stickyNote, setStickyNote] = useState("");

  return (
    <div>
      <div>
        <h1>Hauptbereich</h1>
        <p>
          <Link to="/">Logout</Link>
        </p>
      </div>
      <div>
        <FontAwesomeIcon icon={faHouseUser} size="3x">
          <p>Benutzerdaten</p>
        </FontAwesomeIcon>
        <FontAwesomeIcon icon={faFlask} size="3x">
        Scientists
        </FontAwesomeIcon>
        <FontAwesomeIcon icon={faStickyNote} size="3x"/>
      </div>
    </div>
  );
}

export default MainSpace;
