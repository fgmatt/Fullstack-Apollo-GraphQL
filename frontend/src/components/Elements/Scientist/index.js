import React, { useState } from "react";
import ScientistInput from "../Inputs/ScientistInput";
import TextareaBiography from "../Textarea";
import ButtonInput from "../Inputs/ButtonInput";
import { useMutation } from "@apollo/react-hooks";
import {
  CHANGE_SCIENTIST_NAME_BY_NAME,
  CHANGE_SCIENTIST_LIVED_IN_BY_NAME,
  CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME,
  CHANGE_SCIENTIST_TOPICS_BY_NAME,
  CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME,
  DELETE_SCIENTIST_BY_NAME,
} from "../../../graphQL/mutations";

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
  refetch,
}) => {
  const [vName, setVName] = useState(name);
  const [vLivedIn, setVLivedIn] = useState(livedIn);
  const [vBiographicalData, setVBiographicalData] = useState(biographicalData);
  const [vTopics, setVTopics] = useState(topics);
  const [vBiography, setVBiography] = useState(biography);

  let [isClickedName, setIsClickedName] = useState(false);
  let [isClickedLivedIn, setIsClickedLivedIn] = useState(false);
  let [isClickedBiographicalData, setIsClickedBiographicalData] = useState(
    false
  );
  let [isClickedTopics, setIsClickedTopics] = useState(false);
  let [isClickedBiography, setIsClickedBiography] = useState(false);

  let [isDisabled, setIsDisabled] = useState(false);

  let [isDeleted, setIsDeleted] = useState(false);

  const [cursor, setCursor] = useState("pointer");

  const [changeScientistNameByName, resChangeScientistNameByName] = useMutation(
    CHANGE_SCIENTIST_NAME_BY_NAME,
    {
      variables: { name, newName: vName },
    }
  );
  const [
    changeScientistLivedInByName,
    resChangeScientistLivedInByName,
  ] = useMutation(CHANGE_SCIENTIST_LIVED_IN_BY_NAME, {
    variables: { name, livedIn: vLivedIn },
  });
  const [
    changeScientistBiographicalDataByName,
    resChangeScientistBiographicalDataByName,
  ] = useMutation(CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME, {
    variables: { name, biographicalData: vBiographicalData },
  });
  const [
    changeScientistTopicsByName,
    resChangeScientistTopicsByName,
  ] = useMutation(CHANGE_SCIENTIST_TOPICS_BY_NAME, {
    variables: { name, topics: vTopics },
  });
  const [
    changeScientistBiographyByName,
    resChangeScientistBiographyByName,
  ] = useMutation(CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME, {
    variables: { name, biography: vBiography },
  });

  const [
    deleteScientistByName,
    resDeleteScientistByName,
  ] = useMutation(DELETE_SCIENTIST_BY_NAME, { variables: { name } });

  let [isMutatedName, setIsMutatedName] = useState(false);
  let [isMutatedLivedIn, setIsMutatedLivedIn] = useState(false);
  let [isMutatedBiographicalData, setIsMutatedBiographicalData] = useState(
    false
  );
  let [isMutatedTopics, setIsMutatedTopics] = useState(false);
  let [isMutatedBiography, setIsMutatedBiography] = useState(false);

  if (resChangeScientistNameByName) {
  }

  function handleNameClick(event) {
    if (!isOneClicked) {
      setIsClickedName(true);
      setIsOneClicked(true);
      setIsUsed(true);
      setIsDisabled(true);
    }
  }
  function handleLivedInClick(event) {
    if (!isOneClicked) {
      setIsClickedLivedIn(true);
      setIsOneClicked(true);
      setIsUsed(true);
      setIsDisabled(true);
    }
  }
  function handleBiographicalDataClick(event) {
    if (!isOneClicked) {
      setIsClickedBiographicalData(true);
      setIsOneClicked(true);
      setIsUsed(true);
      setIsDisabled(true);
    }
  }
  function handleTopicsClick(event) {
    if (!isOneClicked) {
      setIsClickedTopics(true);
      setIsOneClicked(true);
      setIsUsed(true);
      setIsDisabled(true);
    }
  }
  function handleBiographyClick(event) {
    if (!isOneClicked) {
      setIsClickedBiography(true);
      setIsOneClicked(true);
      setIsUsed(true);
      setIsDisabled(true);
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
      setVName(name);
      setIsBlocking(false);
      setIsDisabled(false);
    }
    if (event.key === "Enter") {
      changeScientistNameByName();
      setIsClickedName(false);
      setIsOneClicked(false);
      setIsBlocking(false);
      setIsMutatedName(true);
      refetch();
      setIsDisabled(false);
    }
  }
  function handleKeyDownLivedIn(event) {
    if (event.key === "Escape") {
      setIsClickedLivedIn(false);
      setIsOneClicked(false);
      setVLivedIn(livedIn);
      setIsBlocking(false);
      setIsDisabled(false);
    }
    if (event.key === "Enter") {
      changeScientistLivedInByName();
      setIsClickedLivedIn(false);
      setIsOneClicked(false);
      setIsBlocking(false);
      setIsMutatedLivedIn(true);
      refetch();
      setIsDisabled(false);
    }
  }
  function handleKeyDownBiographicalData(event) {
    if (event.key === "Escape") {
      setIsClickedBiographicalData(false);
      setIsOneClicked(false);
      setVBiographicalData(biographicalData);
      setIsBlocking(false);
      setIsDisabled(false);
    }
    if (event.key === "Enter") {
      changeScientistBiographicalDataByName();
      setIsClickedBiographicalData(false);
      setIsOneClicked(false);
      setIsBlocking(false);
      setIsMutatedBiographicalData(true);
      refetch();
      setIsDisabled(false);
    }
  }
  function handleKeyDownTopics(event) {
    if (event.key === "Escape") {
      setIsClickedTopics(false);
      setIsOneClicked(false);
      setVTopics(topics);
      setIsBlocking(false);
      setIsDisabled(false);
    }
    if (event.key === "Enter") {
      changeScientistTopicsByName();
      setIsClickedTopics(false);
      setIsOneClicked(false);
      setIsBlocking(false);
      setIsMutatedTopics(true);
      refetch();
      setIsDisabled(false);
    }
  }
  function handleKeyDownBiography(event) {
    if (event.key === "Escape") {
      setIsClickedBiography(false);
      setIsOneClicked(false);
      setVBiography(biography);
      setIsBlocking(false);
      setIsDisabled(false);
    }
    if (event.key === "Enter") {
      changeScientistBiographyByName();
      setIsClickedBiography(false);
      setIsOneClicked(false);
      setIsBlocking(false);
      setIsMutatedBiography(true);
      refetch();
      setIsDisabled(false);
    }
  }

  function handleDeleteButtonClick(event) {
    deleteScientistByName();
    setIsDeleted(true);
  }

  function handleDeleteButtonMouseOver(event) {
    if (isOneClicked) {
      setCursor("not-allowed");
    } else {
      setCursor("pointer");
    }
  }

  if (isDeleted) {
    return null;
  } else {
    return (
      <div className="scientist">
        {resChangeScientistNameByName.loading && <p></p>}
        {resChangeScientistLivedInByName.loading && <p></p>}
        {resChangeScientistBiographicalDataByName.loading && <p></p>}
        {resChangeScientistTopicsByName.loading && <p></p>}
        {resChangeScientistBiographyByName.loading && <p></p>}
        <div onClick={(e) => handleNameClick(e)}>
          <div onKeyDown={(e) => handleKeyDownName(e)} tabIndex="1">
            {!isClickedName ? (
              <div>
                <p id="scientistName">{name}</p>
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
              <p id="scientistBiographicalData">{biographicalData}</p>
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
              <p id="scientistLivedIn">{livedIn}</p>
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
              <p id="scientistTopics">{topics}</p>
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
              <p id="scientistBiography">{biography}</p>
            </div>
          ) : (
            <TextareaBiography
              hasLabel={false}
              value={vBiography}
              onChange={(e) => handleBiographyChange(e)}
            />
          )}
        </div>
        <ButtonInput
          id="scientistDeleteButton"
          className="scientistDeleteButton"
          style={{ cursor: cursor }}
          type="button"
          value="Löschen"
          disabled={isDisabled}
          onClick={(e) => handleDeleteButtonClick(e)}
          onMouseOver={(e) => handleDeleteButtonMouseOver(e)}
        />
      </div>
    );
  }
};

export default Scientist;
