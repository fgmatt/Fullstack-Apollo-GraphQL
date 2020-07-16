import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHouseUser,
  faUserCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import IconLegend from "../IconLegend";

function MainSpace() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  let [mouseoverHU, setMouseoverHU] = useState(false);
  let [mouseoverF, setMouseoverF] = useState(false);
  let [mouseoverSN, setMouseoverSN] = useState(false);

  function handleMouseOverHU() {
    setMouseoverHU(true);
  }

  function handleMouseOverF() {
    setMouseoverF(true);
  }

  function handleMouseOverSN() {
    setMouseoverSN(true);
  }

  function handleMouseLeaveHU() {
    setMouseoverHU(false);
  }

  function handleMouseLeaveF() {
    setMouseoverF(false);
  }

  function handleMouseLeaveSN(){
    setMouseoverSN(false);
  }

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
      <div className="icons">
        <FontAwesomeIcon
          className="icons_fa"
          icon={faHouseUser}
          size="4x"
          onClick={handleHouseUser}
          onMouseOver={handleMouseOverHU}
          onMouseLeave={handleMouseLeaveHU}
        />
        <FontAwesomeIcon
          className="icons_fa"
          icon={faFlask}
          size="4x"
          onClick={handleFlask}
          onMouseOver={handleMouseOverF}
          onMouseLeave={handleMouseLeaveF}
        />
        <FontAwesomeIcon
          className="icons_fa"
          icon={faStickyNote}
          size="4x"
          onClick={handleStickyNote}
          onMouseOver={handleMouseOverSN}
          onMouseLeave={handleMouseLeaveSN}
        />
        {mouseoverHU && <IconLegend className="iconLegend iconLegendH">Benutzerdaten</IconLegend>}
        {mouseoverF && <IconLegend className="iconLegend iconLegendS">Wissenschaftler</IconLegend>}
        {mouseoverSN && <IconLegend className="iconLegend iconLegendW">Weiteres</IconLegend>}
      </div>
    </div>
  );
}

export default MainSpace;
