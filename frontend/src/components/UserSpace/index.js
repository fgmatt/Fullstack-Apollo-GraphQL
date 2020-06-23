import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFINDBYID } from "../../graphQL/queries";

function UserSpace() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push("/");
  }

  const { loading, error, data } = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession },
  });

  function handleLink() {
    sessionStorage.removeItem("userId");
  }

  return (
    <div>
      <div>
        <h1>Benutzerbereich</h1>
        <p>
          <Link onClick={handleLink} to="/">
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
