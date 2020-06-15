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

let userIdFake;

function MainSpace() {
  const history = useHistory();

  console.log(userIdFake);
  
  if (!userIdFake) {
    if (!userId) {
      history.push("/");
    } else {
      userIdFake = 1;
    }
  }

  function handleHouseUser() {
    history.push("/email");
  }

  function handleFlask() {
    history.push("/science");
  }

  function handleStickyNote() {
    history.push("/some");
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
