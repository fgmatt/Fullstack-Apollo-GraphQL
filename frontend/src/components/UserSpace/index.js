import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFINDBYID } from "../../graphQL/queries";
import { rHome, rEmail, rPassword } from "../RoutesName";

function UserSpace() {
  const history = useHistory();

  const userIdSession = sessionStorage.getItem("userId");

  if (userIdSession === null) {
    history.push(rHome);
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
          <Link to={rEmail}>E-Mail ändern</Link>
        </p>
        <p>
          <Link to={rPassword}>Passwort ändern</Link>
        </p>
      </div>
    </div>
  );
}

export default UserSpace;
