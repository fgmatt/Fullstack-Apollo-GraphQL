import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faHouseUser,
  faUserCircle,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import IconLegend from "../IconLegend";
import { rHome, rUserData, rScientists, rMiscelleanous } from "../RoutesName";
import { USERFINDBYID } from "../../graphQL/queries";

function StartSite() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  const { loading, error, data } = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession },
  });

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

  function handleMouseLeaveSN() {
    setMouseoverSN(false);
  }

  function handleUserCircle() {}

  function handleHouseUser() {
    history.push(rUserData);
  }

  function handleFlask() {
    history.push(rScientists);
  }

  function handleStickyNote() {
    history.push(rMiscelleanous);
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  return (
    <div>
      <div className="header_startsite">
        <div className="div_icons_fauc">
          <FontAwesomeIcon
            className="icons_fauc"
            icon={faUserCircle}
            size="2x"
            onClick={handleUserCircle}
          />
          <div className="div_userfindbyid">
            {loading && <p>Loading...</p>}
            {data && <p>{data.userfindById.email}</p>}
          </div>
        </div>
        <div>
          <h1 id="title_startsite">Startseite</h1>
        </div>
        <div>
          <p className="logout">
            <Link onClick={handleLink} to="/">
              Logout
            </Link>
          </p>
        </div>
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
        {mouseoverHU && (
          <IconLegend className="iconLegend iconLegendH">
            Benutzerdaten
          </IconLegend>
        )}
        {mouseoverF && (
          <IconLegend className="iconLegend iconLegendS">
            Wissenschaftler
          </IconLegend>
        )}
        {mouseoverSN && (
          <IconLegend className="iconLegend iconLegendW">Weiteres</IconLegend>
        )}
      </div>
    </div>
  );
}

export default StartSite;
