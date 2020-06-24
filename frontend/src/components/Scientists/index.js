import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";

function Scientists() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

 function handleLink() {
   sessionStorage.removeItem("userId");
 }

  return (
    <div>
      <div>
        <h1>Wissenschaftler</h1>
        <p>
          <Link to="/" onClick={handleLink}>Logout</Link>
        </p>
      </div>
      <div>
        <p>
          <Link to="/Hauptbereich">Zurück</Link>
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {data && <p>{data.allScientists[0].name}</p>}
    </div>
  );
}

export default Scientists;
