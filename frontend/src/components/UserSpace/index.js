import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFINDBYID } from "../../graphQL/queries";
import { userId } from "../Login";

function UserSpace() {
  const history = useHistory();
  if (!userId) {
    history.push("/");
  }
  
  const { loading, error, data } = useQuery(USERFINDBYID, {
    variables: { _id: userId },
  });
  return (
    <div>
      <div>
        <h1>Benutzerbereich</h1>
        <p>
          <Link to="/">Logout</Link>
        </p>
      </div>
      <div>
        <p>Benutzer ist eingeloggt als:</p>
        {loading && <p>Loading...</p>}
        {data && <p>{data.userfindById.email}</p>}
      </div>
      <div>
        <p>
          <Link to="/email">E-Mail ändern</Link>
        </p>
        <p>
          <Link to="/password">Passwort ändern</Link>
        </p>
      </div>
    </div>
  );
}

export default UserSpace;
