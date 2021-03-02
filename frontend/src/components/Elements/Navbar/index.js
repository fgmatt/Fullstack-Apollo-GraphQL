import React, { useState, useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
//import { faAlignJustify as AlignJustify } from "@fortawesome/free-solid-svg-icons";
import animationData from "../../../lotties/burger-menu.json";
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

  const lottieRef = useRef();

  //const [isAlignJustifyClicked, setIsAlignJustifyClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocking, setIsBlocking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasPaused, setHasPaused] = useState(false);
  const [counter, setCounter] = useState(0);

  // function handleAlignJustifyClick(event) {
  //   if (!isAlignJustifyClicked) {
  //     setIsAlignJustifyClicked(true);
  //   } else {
  //     setIsAlignJustifyClicked(false);
  //   }
  // }

  function handleIsPlaying() {
    if (!isBlocking) {
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
      setIsPlaying(true);
      setHasPaused(false);
      setIsBlocking(true);
    }
  }

  function handleEnterFrame() {
    setCounter(counter + 1);
  }

  function handleLoopComplete() {
    setCounter(0);
  }

  function handleButtonClickLogin(event) {
    event.preventDefault();
    history.push(rLogin);
  }

  useEffect(() => {
    if (isPlaying) {
      lottieRef.current.play();
      lottieRef.current.setSpeed(2);
    }

    if ((counter === 40 && !hasPaused) || (counter === 0 && hasStarted)) {
      lottieRef.current.pause();

      setCounter(counter + 1);

      setIsPlaying(false);
      setHasPaused(true);
      setHasStarted(true);
      setIsBlocking(false);
    }
  });

  const style = { heigth: 60, width: 60, margin: "0 0 0 -6px", float: "left" };

  return (
    <div>
      <div className="navbar">
        {/* <FontAwesomeIcon
          className="iconAJ"
          icon={AlignJustify}
          size="2x"
          onClick={(e) => handleAlignJustifyClick(e)}
        /> */}
        <div style={style} onClick={() => handleIsPlaying()}>
          {" "}
          <Lottie
            animationData={animationData}
            autoplay={false}
            loop={true}
            onEnterFrame={() => handleEnterFrame()}
            onLoopComplete={() => handleLoopComplete()}
            lottieRef={lottieRef}
            style={style}
          />
        </div>
        <InputButton
          className="loginButton"
          value="Login"
          onClick={(e) => handleButtonClickLogin(e)}
        />
      </div>
      {
        /*isAlignJustifyClicked*/ isOpen && (
          <div className="navLinks">
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
        )
      }
    </div>
  );
}
