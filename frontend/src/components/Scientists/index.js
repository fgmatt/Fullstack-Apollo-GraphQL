import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import { rHome, rMainSpace, rNewScientist} from "../RoutesName";

function Scientists() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
  }

  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  function handleNewScientist() {
    history.push(rNewScientist);
  }

  return (
    <div>
      <div>
        <h1>Wissenschaftler</h1>
        <p className="logout">
          <Link to={rHome} onClick={handleLink}>
            Logout
          </Link>
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {data && <p>{data.allScientists[0].name}</p>}
      <div>
        <p>
          <Link to={rMainSpace}>Zurück</Link>
        </p>
        <InputButton
          className="userDataButtonE div_button"
          onClick={handleNewScientist}
          value="Neuer Wissenschaftler"
        />
      </div>
    </div>
  );
}

export default Scientists;
