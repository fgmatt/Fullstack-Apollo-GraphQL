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
  const [isPlaying, setIsPlaying] = useState(false);
  const [blocked, setBlocked] = useState(true);
  const [isUsed, setIsUsed] = useState(false);
  const [counter, setCounter] = useState(0);

  // function handleAlignJustifyClick(event) {
  //   if (!isAlignJustifyClicked) {
  //     setIsAlignJustifyClicked(true);
  //   } else {
  //     setIsAlignJustifyClicked(false);
  //   }
  // }

  function handleIsPlaying() {
    setIsPlaying(true);
  }

  function handleEnterFrame() {
    setCounter(counter + 1);
    console.log(counter);
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
    }

    if (counter === 80 || (counter === 0 && !blocked)) {
      setBlocked(true);
      lottieRef.current.pause();
    }
  });

  const style = { heigth: 60, width: 60, margin: 0, float: "left" };

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
        /*isAlignJustifyClicked*/ isPlaying && (
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
