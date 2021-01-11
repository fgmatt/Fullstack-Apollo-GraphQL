import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify as AlignJustify } from "@fortawesome/free-solid-svg-icons";
import {
  rLogin,
  rHome,
  rPhilosophersPublic,
  rCountriesPublic,
  rScientistsPublic,
  rMemoryGamesPublic,
} from "../../RoutesName";
import { InputButton } from "../Buttons";

export default function Navbar() {
  const history = useHistory();

  const [isAlignJustifyClicked, setIsAlignJustifyClicked] = useState(false);

  function handleAlignJustifyClick(event) {
    if (!isAlignJustifyClicked) {
      setIsAlignJustifyClicked(true);
    } else {
      setIsAlignJustifyClicked(false);
    }
  }

  function handleButtonClickLogin(event) {
    event.preventDefault();
    history.push(rLogin);
  }

  return (
    <div>
      <div className="navbar">
        <FontAwesomeIcon
          className="iconAJ"
          icon={AlignJustify}
          size="2x"
          onClick={(e) => handleAlignJustifyClick(e)}
        />
        <InputButton
          className="loginButton"
          value="Login"
          onClick={(e) => handleButtonClickLogin(e)}
        />
      </div>
      {isAlignJustifyClicked && (
        <div>
          <p>
            <Link to={rHome}>Home</Link>
          </p>
          <p>
            <Link to={rCountriesPublic}>Länder</Link>
          </p>
          <p>
            <Link to={rScientistsPublic}>Wissenschaftler</Link>
          </p>
          <p>
            <Link to={rPhilosophersPublic}>Philosophen</Link>
          </p>
          <p>
            <Link to={rMemoryGamesPublic}>Gedächtnisspiel</Link>
          </p>
        </div>
      )}
    </div>
  );
}
