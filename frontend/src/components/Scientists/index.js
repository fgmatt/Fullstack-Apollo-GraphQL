import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import Scientist from "../Elements/Scientist";
import {
  rHome,
  rMainSpace,
  rNewScientist,
  rChangeScientist,
} from "../RoutesName";

function Scientists() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  const [name, setName] = useState("");
  const [livedIn, setLivedIn] = useState("");
  const [biographicalData, setBiographicalData] = useState("");
  const [topics, setTopics] = useState("");
  const [biography, setBiography] = useState("");

  let [isClickedName, setIsClickedName] = useState(false);
  let [isClickedLivedIn, setIsClickedLivedIn] = useState(false);
  let [isClickedBiographicalData, setIsClickedBiographicalData] = useState(
    false
  );
  let [isClickedTopics, setIsClickedTopics] = useState(false);
  let [isClickedBiography, setIsClickedBiography] = useState(false);

  let [isOneClicked, setIsOneClicked] = useState(false);

  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

  let scientists;
  if (data) {
    scientists = data.allScientists;
  }

  let doc = document.getElementsByClassName("scientist");
  console.log(doc)

  function handleNameClick(event) {
    if (!isOneClicked) {
      setIsClickedName(true);
      setIsOneClicked(true);
    }
  }
  function handleLivedInClick(event) {
    if (!isOneClicked) {
      setIsClickedLivedIn(true);
      setIsOneClicked(true);
    }
  }
  function handleBiographicalDataClick(event) {
    if (!isOneClicked) {
      setIsClickedBiographicalData(true);
      setIsOneClicked(true);
    }
  }
  function handleTopicsClick(event) {
    if (!isOneClicked) {
      setIsClickedTopics(true);
      setIsOneClicked(true);
    }
  }
  function handleBiographyClick(event) {
    if (!isOneClicked) {
      setIsClickedBiography(true);
      setIsOneClicked(true);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleLivedInChange(event) {
    setLivedIn(event.target.value);
  }
  function handleBiographicalDataChange(event) {
    setBiographicalData(event.target.value);
  }
  function handleTopicsChange(event) {
    setTopics(event.target.value);
  }
  function handleBiographyChange(event) {
    setBiography(event.target.value);
  }

  function handleKeyDownName(event) {
    if (event.key === "Escape") {
      setIsClickedName(false);
      setIsOneClicked(false);
    }
  }
  function handleKeyDownLivedIn(event) {
    if (event.key === "Escape") {
      setIsClickedLivedIn(false);
      setIsOneClicked(false);
    }
  }
  function handleKeyDownBiographicalData(event) {
    if (event.key === "Escape") {
      setIsClickedBiographicalData(false);
      setIsOneClicked(false);
    }
  }
  function handleKeyDownTopics(event) {
    if (event.key === "Escape") {
      setIsClickedTopics(false);
      setIsOneClicked(false);
    }
  }
  function handleKeyDownBiography(event) {
    if (event.key === "Escape") {
      setIsClickedBiography(false);
      setIsOneClicked(false);
    }
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  function handleNewScientist() {
    history.push(rNewScientist);
  }

  function handleChangeScientist() {
    history.push(rChangeScientist);
  }

  return (
    <div>
      <div className="header_scientists">
        <h1>Wissenschaftler</h1>
        <div>
          <p className="logout">
            <Link to={rHome} onClick={handleLink}>
              Logout
            </Link>
          </p>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      <div className="gridScientists">
        {data &&
          scientists.map((scientist) => (
            <Scientist
              name={scientist.name}
              livedIn={scientist.livedIn}
              biographicalData={scientist.biographicalData}
              topics={scientist.topics}
              biography={scientist.biography}
              valueName={name}
              valueLivedIn={livedIn}
              valueBiographicalData={biographicalData}
              valueTopics={topics}
              valueBiography={biography}
              onClickName={(e) => handleNameClick(e)}
              onClickLivedIn={(e) => handleLivedInClick(e)}
              onClickBiographicalData={(e) => handleBiographicalDataClick(e)}
              onClickTopics={(e) => handleTopicsClick(e)}
              onClickBiography={(e) => handleBiographyClick(e)}
              isClickedName={isClickedName}
              isClickedLivedIn={isClickedLivedIn}
              isClickedBiographicalData={isClickedBiographicalData}
              isClickedTopics={isClickedTopics}
              isClickedBiography={isClickedBiography}
              onChangeName={(e) => handleNameChange(e)}
              onChangeLivedIn={(e) => handleLivedInChange(e)}
              onChangeBiographicalData={(e) => handleBiographicalDataChange(e)}
              onChangeTopics={(e) => handleTopicsChange(e)}
              onChangeBiography={(e) => handleBiographyChange(e)}
              onKeyDownName={(e) => handleKeyDownName(e)}
              onKeyDownLivedIn={(e) => handleKeyDownLivedIn(e)}
              onKeyDownBiographicalData={(e) =>
                handleKeyDownBiographicalData(e)
              }
              onKeyDownTopics={(e) => handleKeyDownTopics(e)}
              onKeyDownBiography={(e) => handleKeyDownBiography(e)}
            />
          ))}
      </div>
      <div className="div_wlinks">
        <div>
          <p className="wBack">
            <Link to={rMainSpace}>Zurück</Link>
          </p>
        </div>
        <InputButton
          className=" "
          onClick={handleNewScientist}
          value="Neuer Wissenschaftler"
        />
        <InputButton
          className=""
          onClick={handleChangeScientist}
          value="Ändere Wissenschaftler"
        />
      </div>
    </div>
  );
}

export default Scientists;
