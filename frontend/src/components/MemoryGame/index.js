import React, { useState, useEffect } from "react";
import { rHome, rMiscelleanous } from "../RoutesName";
import { Link, useHistory } from "react-router-dom";
import { InputButton } from "../Elements/Buttons";

export default function MemoryGame() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  const [count, setCount] = useState(2);
  const [digits, setDigits] = useState([]);
  const [digit, setDigit] = useState(undefined);

  const arr = [1, 4, 6, 7, 8, 0];
  console.log(arr.length);

  console.log(digits.length);

  useEffect(() => {
    if (document.getElementById("memNumber") !== null) {
      document.getElementById("memNumber").innerHTML = `${digit}`;
    }
  });

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  function handleStartButton() {
    setTimeout(function test() {
      digits.splice(0, count);
      setCount(count + 1);
      for (let i = 0; i <= count; i++) {
        setTimeout(function test1() {
          let aktDigit = Math.floor(10 * Math.random());
          setDigit(aktDigit);
          digits.push(aktDigit);
        }, 1000);
      }
    }, 1000);
  }

  return (
    <div>
      <div className="headerMiscellaneous">
        <div>
          <h1>Gedächtnisspiel</h1>
        </div>
        <div>
          <p className="logout">
            <Link onClick={handleLink} to={rHome}>
              Logout
            </Link>
          </p>
        </div>
        <div>
          {digit && <h1 id="memNumber">{digit}</h1>}
          <InputButton
            className="startButton"
            value="Start"
            onClick={handleStartButton}
          />
        </div>
      </div>
      <div>
        <p className="back">
          <Link to={rMiscelleanous}>Zurück</Link>
        </p>
      </div>
    </div>
  );
}
