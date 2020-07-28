import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
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

  let names = [];
  if (data) {
    const iterator = data.allScientists.values();

    for (const value of iterator) {
      names.push(<p>{value.name}</p>);
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
      {names}
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
