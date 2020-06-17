import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";

function Scientists() {
  const { loading, error, data } = useQuery(FETCH_ALL_SCIENTISTS);

  return (
    <div>
      <div>
        <h1>Wissenschaftler</h1>
        <p>
          <Link to="/">Logout</Link>
        </p>
      </div>
      {loading && <p>Loading...</p>}
      {data && <p>{data.allScientists[0].name}</p>}
    </div>
  );
}

export default Scientists;
