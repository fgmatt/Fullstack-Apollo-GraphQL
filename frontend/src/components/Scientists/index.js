import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import Scientist from "../Elements/ContentBox";
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

  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

  let scientists;
  if (data) {
    scientists = data.allScientists;
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
      { data && scientists.map((scientist) => (
        <Scientist
          name={scientist.name}
          livedIn={scientist.livedIn}
          biographicalData={scientist.biographicalData}
          topics={scientist.topics}
          biography={scientist.biography}
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
