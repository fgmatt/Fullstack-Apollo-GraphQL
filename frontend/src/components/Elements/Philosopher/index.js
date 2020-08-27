import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ScientistInput from "../Inputs/ScientistInput";
import TextareaBiography from "../Textarea";
import ConfirmDialog from "../ConfirmDialog";
import { useMutation } from "@apollo/react-hooks";
import {
  CHANGE_PHILOSOPHER_NAME_BY_NAME,
  CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME,
  CHANGE_PHILOSOPHER_BIOGRAPHICAL_DATA_BY_NAME,
  CHANGE_PHILOSOPHER_TOPICS_BY_NAME,
  CHANGE_PHILOSOPHER_BIOGRAPHY_BY_NAME,
  CHANGE_PHILOSOPHER_WORKS_BY_NAME,
  DELETE_PHILOSOPHER_BY_NAME,
} from "../../../graphQL/mutations";

const Philosopher = ({
  name,
  biographicalData,
  livedIn,
  topics,
  biography,
  works,
  isOneClicked,
  setIsOneClicked,
  setIsBlocking,
  setIsUsed,
  refetch,
}) => {
  const history = useHistory();

  const [vName, setVName] = useState(name);
  const [vLivedIn, setVLivedIn] = useState(livedIn);
  const [vBiographicalData, setVBiographicalData] = useState(biographicalData);
  const [vTopics, setVTopics] = useState(topics);
  const [vBiography, setVBiography] = useState(biography);
  const [vWorks, setVWorks] = useState(works);

  let [isClickedName, setIsClickedName] = useState(false);
  let [isClickedLivedIn, setIsClickedLivedIn] = useState(false);
  let [isClickedBiographicalData, setIsClickedBiographicalData] = useState(
    false
  );
  let [isClickedTopics, setIsClickedTopics] = useState(false);
  let [isClickedBiography, setIsClickedBiography] = useState(false);
  let [isClickedWorks, setIsClickedWorks] = useState(false);

  let [isDisabled, setIsDisabled] = useState(false);

  let [isDeleted, setIsDeleted] = useState(false);

  const [cursor, setCursor] = useState("pointer");

  const [open, setOpen] = useState(false);

  const [
    changePhilosopherNameByName,
    resChangePhilosopherNameByName,
  ] = useMutation(CHANGE_PHILOSOPHER_NAME_BY_NAME, {
    variables: { name, newName: vName },
  });
  const [
    changePhilosopherLivedInByName,
    resChangePhilsopherLivedInByName,
  ] = useMutation(CHANGE_PHILOSOPHER_LIVED_IN_BY_NAME, {
    variables: { name, livedIn: vLivedIn },
  });
  const [
    changePhilosopherBiographicalDataByName,
    resChangePhilosopherBiographicalDataByName,
  ] = useMutation(CHANGE_PHILOSOPHER_BIOGRAPHICAL_DATA_BY_NAME, {
    variables: { name, biographicalData: vBiographicalData },
  });
  const [
    changePhilosopherTopicsByName,
    resChangePhilosopherTopicsByName,
  ] = useMutation(CHANGE_PHILOSOPHER_TOPICS_BY_NAME, {
    variables: { name, topics: vTopics },
  });
  const [
    changePhilosopherBiographyByName,
    resChangePhilsopherBiographyByName,
  ] = useMutation(CHANGE_PHILOSOPHER_BIOGRAPHY_BY_NAME, {
    variables: { name, biography: vBiography },
  });
  const [
    changePhilosopherWorksByName,
    resChangePhilosopherWorksByName,
  ] = useMutation(CHANGE_PHILOSOPHER_WORKS_BY_NAME, {
    variables: { name, works: vWorks },
  });

  const [
    deletePhilosopherByName,
    resDeletePhilsopherByName,
  ] = useMutation(DELETE_PHILOSOPHER_BY_NAME, { variables: { name } });

  function handleClickBlock() {
    setIsOneClicked(true);
    setIsUsed(true);
    setIsDisabled(true);
  }

  function handleKeyDownBlock() {
    setIsOneClicked(false);
    setIsBlocking(false);
    setIsDisabled(false);
  }

  function handleKeyDownBlockEnter() {
    handleKeyDownBlock();
    refetch();
    window.location.reload(true);
  }

  function handleNameClick(event) {
    if (!isOneClicked) {
      setIsClickedName(true);
      handleClickBlock();
    }
  }
  function handleLivedInClick(event) {
    if (!isOneClicked) {
      setIsClickedLivedIn(true);
      handleClickBlock();
    }
  }
  function handleBiographicalDataClick(event) {
    if (!isOneClicked) {
      setIsClickedBiographicalData(true);
      handleClickBlock();
    }
  }
  function handleTopicsClick(event) {
    if (!isOneClicked) {
      setIsClickedTopics(true);
      handleClickBlock();
    }
  }
  function handleBiographyClick(event) {
    if (!isOneClicked) {
      setIsClickedBiography(true);
      handleClickBlock();
    }
  }
  function handleWorksClick(event) {
    if (!isOneClicked) {
      setIsClickedWorks(true);
      handleClickBlock();
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
  function handleWorksChange(event) {
    setVWorks(event.target.value);
    setIsBlocking(event.target.value.length > 0);
  }

  function handleKeyDownName(event) {
    if (event.key === "Escape") {
      setIsClickedName(false);
      setVName(name);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherNameByName();
      setIsClickedName(false);
      handleKeyDownBlockEnter();
    }
  }
  function handleKeyDownLivedIn(event) {
    if (event.key === "Escape") {
      setIsClickedLivedIn(false);
      setVLivedIn(livedIn);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherLivedInByName();
      setIsClickedLivedIn(false);
      handleKeyDownBlockEnter();
    }
  }
  function handleKeyDownBiographicalData(event) {
    if (event.key === "Escape") {
      setIsClickedBiographicalData(false);
      setVBiographicalData(biographicalData);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherBiographicalDataByName();
      setIsClickedBiographicalData(false);
      handleKeyDownBlockEnter();
    }
  }
  function handleKeyDownTopics(event) {
    if (event.key === "Escape") {
      setIsClickedTopics(false);

      setVTopics(topics);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherTopicsByName();
      setIsClickedTopics(false);
      handleKeyDownBlockEnter();
    }
  }
  function handleKeyDownBiography(event) {
    if (event.key === "Escape") {
      setIsClickedBiography(false);

      setVBiography(biography);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherBiographyByName();
      setIsClickedBiography(false);
      handleKeyDownBlockEnter();
    }
  }
  function handleKeyDownWorks(event) {
    if (event.key === "Escape") {
      setIsClickedWorks(false);

      setVWorks(works);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changePhilosopherWorksByName();
      setIsClickedWorks(false);
      handleKeyDownBlockEnter();
    }
  }

  function handleDeleteButtonClick(event) {
    setOpen(true);
  }

  function handleDeleteButtonMouseOver(event) {
    if (isOneClicked) {
      setCursor("not-allowed");
    } else {
      setCursor("pointer");
    }
  }

  function handleCloseConfirmDialog() {
    setOpen(false);
  }

  function handleClickDisagree() {
    handleCloseConfirmDialog();
  }

  function handleClickAgree() {
    handleCloseConfirmDialog();
    deletePhilosopherByName();
    setIsDeleted(true);
  }

  if (isDeleted) {
    return null;
  } else {
    return (
      <div className="philosopher">
        <div onClick={(e) => handleNameClick(e)}>
          <div onKeyDown={(e) => handleKeyDownName(e)} tabIndex="1">
            {!isClickedName ? (
              <div>
                <p id="philospherName">{name}</p>
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
              <p id="philosopherBiographicalData">{biographicalData}</p>
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
              <p id="philosopherLivedIn">{livedIn}</p>
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
              <p id="philosopherTopics">{topics}</p>
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
              <p id="philosopherBiography">{biography}</p>
            </div>
          ) : (
            <TextareaBiography
              hasLabel={false}
              value={vBiography}
              onChange={(e) => handleBiographyChange(e)}
            />
          )}
        </div>
        <div
          onClick={(e) => handleWorksClick(e)}
          onKeyDown={(e) => handleKeyDownWorks(e)}
          tabIndex={0}
        >
          {!isClickedWorks ? (
            <div>
              <p id="philosopherWorks">{works}</p>
            </div>
          ) : (
            <ScientistInput
              value={vWorks}
              onChange={(e) => handleWorksChange(e)}
              tabIndex={0}
            />
          )}
        </div>
        <ConfirmDialog
          className="philosopherDeleteButton"
          style={{ cursor: cursor }}
          type="button"
          value="Löschen"
          disabled={isDisabled}
          open={open}
          onClick={(e) => handleDeleteButtonClick(e)}
          onClickDisagree={() => handleClickDisagree()}
          onClickAgree={() => handleClickAgree()}
          onClose={() => handleCloseConfirmDialog()}
          onMouseOver={(e) => handleDeleteButtonMouseOver(e)}
        />
      </div>
    );
  }
};

export default Philosopher;
