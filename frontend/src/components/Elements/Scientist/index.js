import React, { useState } from "react";
import ScientistInput from "../Inputs/ScientistInput";

const Scientist = ({
  name,
  biographicalData,
  livedIn,
  topics,
  biography,
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
      <div onClick={(e) => handleNameClick(e)}>
        <div onKeyDown={(e) => handleKeyDownName(e)} tabIndex="1">
          {!isClickedName ? (
            <div>
              <p>{name}</p>
            </div>
          ) : (
            <ScientistInput
              value={vName}
              onChange={(e) => handleNameChange(e)}
            />
          )}
        </div>
      </div>
      <div
        onClick={(e) => handleBiographicalDataClick(e)}
        onKeyDown={(e) => handleKeyDownBiographicalData(e)}
        tabIndex={0}
      >
        {!isClickedBiographicalData ? (
          <div>
            <p>{biographicalData}</p>
          </div>
        ) : (
          <ScientistInput
            value={vBiographicalData}
            onChange={(e) => handleBiographicalDataChange(e)}
          />
        )}
      </div>
      <div
        onClick={(e) => handleLivedInClick(e)}
        onKeyDown={(e) => handleKeyDownLivedIn(e)}
        tabIndex={0}
      >
        {!isClickedLivedIn ? (
          <div>
            <p>{livedIn}</p>
          </div>
        ) : (
          <ScientistInput
            value={vLivedIn}
            onChange={(e) => handleLivedInChange(e)}
          />
        )}
      </div>
      <div
        onClick={(e) => handleTopicsClick(e)}
        onKeyDown={(e) => handleKeyDownTopics(e)}
        tabIndex={0}
      >
        {!isClickedTopics ? (
          <div>
            <p>{topics}</p>
          </div>
        ) : (
          <ScientistInput
            value={vTopics}
            onChange={(e) => handleTopicsChange(e)}
          />
        )}
      </div>
      <div
        onClick={(e) => handleBiographyClick(e)}
        onKeyDown={(e) => handleKeyDownBiography(e)}
        tabIndex={0}
      >
        {!isClickedBiography ? (
          <div>
            <p>{biography}</p>
          </div>
        ) : (
          <ScientistInput
            value={vBiography}
            onChange={(e) => handleBiographyChange(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Scientist;
