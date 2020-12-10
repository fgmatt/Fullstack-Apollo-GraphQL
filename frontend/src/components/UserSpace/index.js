import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFINDBYID } from "../../graphQL/queries";
import { rHome, rEmailUS, rPasswordUS } from "../RoutesName";

function UserSpace() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");
  const userIdToken = sessionStorage.getItem("token");

  const { loading, error, data } = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (error) {
    history.push(rHome);
  }

  function handleLink() {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
  }

  return (
    <div>
      <div>
        <h1>Benutzerbereich</h1>
        <p>
          <Link onClick={handleLink} to={rHome}>
            Logout
          </Link>
        </p>
      </div>
      <div>
        <p>Benutzer ist eingeloggt als:</p>
        {loading && <p>Loading...</p>}
        {data && <p>{data.userfindById.email}</p>}
      </div>
      <div>
        <p>
          <Link to={rEmailUS}>E-Mail ändern</Link>
        </p>
        <p>
          <Link to={rPasswordUS}>Passwort ändern</Link>
        </p>
      </div>
    </div>
  );
}

export default UserSpace;
