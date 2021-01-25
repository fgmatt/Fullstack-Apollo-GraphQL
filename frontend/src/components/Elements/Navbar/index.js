import React, { useState, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "react-lottie";
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

  const lottieRef = useRef(null);

  //const [isAlignJustifyClicked, setIsAlignJustifyClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // function handleAlignJustifyClick(event) {
  //   if (!isAlignJustifyClicked) {
  //     setIsAlignJustifyClicked(true);
  //   } else {
  //     setIsAlignJustifyClicked(false);
  //   }
  // }

  console.log(isPaused);

  // function handleIsActive() {
  //   if (isActive) {
  //     setIsActive(false);
  //   } else {
  //     setIsActive(true);
  //   }
  //   return isActive;
  // }

  // function handleIsStopped() {
  //   if (!isPaused) {
  //     setIsPaused(true);
  //   } else {
  //     setIsPaused(false);
  //   }
  // }

  function handleButtonClickLogin(event) {
    event.preventDefault();
    history.push(rLogin);
  }

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData,
    rendererSettings: {
      preserveAspektRatio: "xMidYMid slice",
    },
    initialSegment: [0, 38],
  };

  const eventListeners = [
    // {
    //   eventName: "loopComplete",
    //   callback: () => handleIsStopped(),
    // },
    // {
    //   eventName: "loopComplete",
    //   callback: () => handleIsActive(),
    // },
  ];

  // console.log(isActive);

  console.log(lottieRef.current);

  if (lottieRef.current) {
    lottieRef.current.setDirection(-1);
    console.log(lottieRef.current);
  }

  return (
    <div>
      <div className="navbar">
        {/* <FontAwesomeIcon
          className="iconAJ"
          icon={AlignJustify}
          size="2x"
          onClick={(e) => handleAlignJustifyClick(e)}
        /> */}
        <Lottie
          options={defaultOptions}
          lottieRef={lottieRef}
          heigth={60}
          width={60}
          style={{ margin: 0, float: "left" }}
          isPaused={isPaused}
          eventListeners={eventListeners}
        />
        <InputButton
          className="loginButton"
          value="Login"
          onClick={(e) => handleButtonClickLogin(e)}
        />
      </div>
      {
        /*isAlignJustifyClicked*/ isActive && (
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
