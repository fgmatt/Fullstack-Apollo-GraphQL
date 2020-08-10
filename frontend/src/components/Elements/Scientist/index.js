import React, { useState } from "react";
import ScientistInput from "../Inputs/ScientistInput";

const Scientist = ({
  name,
  biographicalData,
  livedIn,
  topics,
  biography,
  // valueName,
  // onChangeName,
  // onClickName,
  // isClickedName,
  // onKeyDownName,
  // valueBiographialData,
  // onChangeBiographicalData,
  // onClickBiographicalData,
  // isClickedBiographicalData,
  // onKeyDownBiographicalData,
  // valueLivedIn,
  // onChangeLivedIn,
  // onClickLivedIn,
  // isClickedLivedIn,
  // onKeyDownLivedIn,
  // valueTopics,
  // onChangeTopics,
  // onClickTopics,
  // isClickedTopics,
  // onKeyDownTopics,
  // valueBiography,
  // onChangeBiography,
  // onClickBiography,
  // isClickedBiography,
  // onKeyDownBiography,
  isOneClicked,
  setIsOneClicked,
  setIsBlocking,
  setIsUsed,
}) => {
  const [vName, setVName] = useState("");
  const [vLivedIn, setVLivedIn] = useState("");
  const [vBiographicalData, setVBiographicalData] = useState("");
  const [vTopics, setVTopics] = useState("");
  const [vBiography, setVBiography] = useState("");

  let [isClickedName, setIsClickedName] = useState(false);
  let [isClickedLivedIn, setIsClickedLivedIn] = useState(false);
  let [isClickedBiographicalData, setIsClickedBiographicalData] = useState(
    false
  );
  let [isClickedTopics, setIsClickedTopics] = useState(false);
  let [isClickedBiography, setIsClickedBiography] = useState(false);

  //let [isOneClicked, setIsOneClicked] = useState(false);

  function handleNameClick(event) {
    if (!isOneClicked) {
      setIsClickedName(true);
      setIsOneClicked(true);
      setIsUsed(true);
    }
  }
  function handleLivedInClick(event) {
    if (!isOneClicked) {
      setIsClickedLivedIn(true);
      setIsOneClicked(true);
      setIsUsed(true);
    }
  }
  function handleBiographicalDataClick(event) {
    if (!isOneClicked) {
      setIsClickedBiographicalData(true);
      setIsOneClicked(true);
      setIsUsed(true);
    }
  }
  function handleTopicsClick(event) {
    if (!isOneClicked) {
      setIsClickedTopics(true);
      setIsOneClicked(true);
      setIsUsed(true);
    }
  }
  function handleBiographyClick(event) {
    if (!isOneClicked) {
      setIsClickedBiography(true);
      setIsOneClicked(true);
      setIsUsed(true);
    }
  }

  function handleNameChange(event) {
    setVName(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }
  function handleLivedInChange(event) {
    setVLivedIn(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }
  function handleBiographicalDataChange(event) {
    setVBiographicalData(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }
  function handleTopicsChange(event) {
    setVTopics(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }
  function handleBiographyChange(event) {
    setVBiography(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleKeyDownName(event) {
    if (event.key === "Escape") {
      setIsClickedName(false);
      setIsOneClicked(false);
      setVName("");
      setIsBlocking(false);
    }
  }
  function handleKeyDownLivedIn(event) {
    if (event.key === "Escape") {
      setIsClickedLivedIn(false);
      setIsOneClicked(false);
      setVLivedIn("");
      setIsBlocking(false);
    }
  }
  function handleKeyDownBiographicalData(event) {
    if (event.key === "Escape") {
      setIsClickedBiographicalData(false);
      setIsOneClicked(false);
      setVBiographicalData("");
      setIsBlocking(false);
    }
  }
  function handleKeyDownTopics(event) {
    if (event.key === "Escape") {
      setIsClickedTopics(false);
      setIsOneClicked(false);
      setVTopics("");
      setIsBlocking(false);
    }
  }
  function handleKeyDownBiography(event) {
    if (event.key === "Escape") {
      setIsClickedBiography(false);
      setIsOneClicked(false);
      setVBiography("");
      setIsBlocking(false);
    }
  }

  return (
    <div className="scientist">
      <div onClick={/*onClickName*/ (e) => handleNameClick(e)}>
        <div
          onKeyDown={/*onKeyDownName*/ (e) => handleKeyDownName(e)}
          tabIndex="1"
        >
          {!isClickedName ? (
            <div>
              <p>{name}</p>
            </div>
          ) : (
            <ScientistInput
              value={/*valueName*/ vName}
              onChange={/*onChangeName*/ (e) => handleNameChange(e)}
            />
          )}
        </div>
      </div>
      <div
        onClick={
          /*onClickBiographicalData*/ (e) => handleBiographicalDataClick(e)
        }
        onKeyDown={
          /*onKeyDownBiographicalData*/ (e) => handleKeyDownBiographicalData(e)
        }
        tabIndex={0}
      >
        {!isClickedBiographicalData ? (
          <div>
            <p>{biographicalData}</p>
          </div>
        ) : (
          <ScientistInput
            value={/*valueBiographialData*/ vBiographicalData}
            onChange={
              /*onChangeBiographicalData*/ (e) =>
                handleBiographicalDataChange(e)
            }
          />
        )}
      </div>
      <div
        onClick={/*onClickLivedIn*/ (e) => handleLivedInClick(e)}
        onKeyDown={/*onKeyDownLivedIn*/ (e) => handleKeyDownLivedIn(e)}
        tabIndex={0}
      >
        {!isClickedLivedIn ? (
          <div>
            <p>{livedIn}</p>
          </div>
        ) : (
          <ScientistInput
            value={/*valueLivedIn*/ vLivedIn}
            onChange={/*onChangeLivedIn*/ (e) => handleLivedInChange(e)}
          />
        )}
      </div>
      <div
        onClick={/*onClickTopics*/ (e) => handleTopicsClick(e)}
        onKeyDown={/*onKeyDownTopics*/ (e) => handleKeyDownTopics(e)}
        tabIndex={0}
      >
        {!isClickedTopics ? (
          <div>
            <p>{topics}</p>
          </div>
        ) : (
          <ScientistInput
            value={/*valueTopics*/ vTopics}
            onChange={/*onChangeTopics*/ (e) => handleTopicsChange(e)}
          />
        )}
      </div>
      <div
        onClick={/*onClickBiography*/ (e) => handleBiographyClick(e)}
        onKeyDown={/*onKeyDownBiography*/ (e) => handleKeyDownBiography(e)}
        tabIndex={0}
      >
        {!isClickedBiography ? (
          <div>
            <p>{biography}</p>
          </div>
        ) : (
          <ScientistInput
            value={/*valueBiography*/ vBiography}
            onChange={/*onChangeBiography*/ (e) => handleBiographyChange(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Scientist;
