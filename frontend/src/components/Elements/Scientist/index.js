import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ScientistInput from "../Inputs/ScientistInput";
import TextareaBiography from "../Textarea";
import ConfirmDialog from "../ConfirmDialog";
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
  isPublic,
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
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

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

  const [open, setOpen] = useState(false);

  const [changeScientistNameByName, resChangeScientistNameByName] = useMutation(
    CHANGE_SCIENTIST_NAME_BY_NAME,
    {
      variables: { userId: userIdSession, name, newName: vName },
    }
  );
  const [
    changeScientistLivedInByName,
    resChangeScientistLivedInByName,
  ] = useMutation(CHANGE_SCIENTIST_LIVED_IN_BY_NAME, {
    variables: { userId: userIdSession, name, livedIn: vLivedIn },
  });
  const [
    changeScientistBiographicalDataByName,
    resChangeScientistBiographicalDataByName,
  ] = useMutation(CHANGE_SCIENTIST_BIOGRAPHICAL_DATA_BY_NAME, {
    variables: {
      userId: userIdSession,
      name,
      biographicalData: vBiographicalData,
    },
  });
  const [
    changeScientistTopicsByName,
    resChangeScientistTopicsByName,
  ] = useMutation(CHANGE_SCIENTIST_TOPICS_BY_NAME, {
    variables: { userId: userIdSession, name, topics: vTopics },
  });
  const [
    changeScientistBiographyByName,
    resChangeScientistBiographyByName,
  ] = useMutation(CHANGE_SCIENTIST_BIOGRAPHY_BY_NAME, {
    variables: { userId: userIdSession, name, biography: vBiography },
  });

  const [deleteScientistByName, resDeleteScientistByName] = useMutation(
    DELETE_SCIENTIST_BY_NAME,
    {
      variables: { userId: userIdSession, name },
    }
  );

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
      setVName(name);
      handleKeyDownBlock();
    }
    if (event.key === "Enter") {
      changeScientistNameByName();
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
      changeScientistLivedInByName();
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
      changeScientistBiographicalDataByName();
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
      changeScientistTopicsByName();
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
      changeScientistBiographyByName();
      setIsClickedBiography(false);
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
    deleteScientistByName();
    setIsDeleted(true);
  }

  if (isDeleted) {
    return null;
  } else if (isPublic) {
    return (
      <div className="scientist">
        <div>
          <p id="scientistName">{name}</p>
        </div>
        <div>
          <p id="scientistBiographicalData">{biographicalData}</p>
        </div>
        <div>
          <p id="scientistLivedIn">{livedIn}</p>
        </div>
        <div>
          <p id="scientistTopics">{topics}</p>
        </div>
        <div>
          <p id="scientistBiography">{biography}</p>
        </div>
      </div>
    );
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
        <ConfirmDialog
          className="scientistDeleteButton"
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

export default Scientist;
