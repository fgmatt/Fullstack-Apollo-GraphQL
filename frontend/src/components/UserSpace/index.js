import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USERFIND } from "../../graphQL/queries";

function UserSpace() {
  const { loading, error, data } = useQuery(USERFIND, {
    variables: { email: "example@gmail.com1" },
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
        {data && <p>{data.userfind.email}</p>}
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
