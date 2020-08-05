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

  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

  let scientists;
  if (data) {
    scientists = data.allScientists;
  }

  let index;
  useEffect(() => {});

  function handleNameClick(event) {}
  function handleLivedInClick(event) {}
  function handleBiographicalDataClick(event) {}
  function handleTopicsClick(event) {}
  function handleBiographyClick(event) {}

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
              onChangeName={(e) => handleNameChange(e)}
              onChangeLivedIn={(e) => handleLivedInChange(e)}
              onChangeBiographicalData={(e) => handleBiographicalDataChange(e)}
              onChangeTopics={(e) => handleTopicsChange(e)}
              onChangeBiography={(e) => handleBiographyChange(e)}
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
