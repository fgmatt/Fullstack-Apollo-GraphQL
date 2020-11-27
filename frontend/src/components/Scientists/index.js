import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { FETCH_ALL_SCIENTISTS, USERFINDBYID } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import Scientist from "../Elements/Scientist";
import {
  rHome,
  rStartSite,
  rNewScientist,
  rChangeScientist,
} from "../RoutesName";
import BlockingMessage from "../Blocking";

function Scientists() {
  const history = useHistory();

  const [useReplUserId, setUseReplUserId] = useState(false);

  let userIdSession = sessionStorage.getItem("userId");
  let userIdToken = sessionStorage.getItem("token");

  if (!useReplUserId) {
    sessionStorage.setItem("replUserId", userIdSession);
    sessionStorage.setItem("replIdToken", userIdToken);
  }

  if (useReplUserId) {
    userIdSession = sessionStorage.getItem("replUserId");
    userIdToken = sessionStorage.getItem("replToken");
  }

  const userfindById = useQuery(USERFINDBYID, {
    variables: { _id: userIdSession, token: userIdToken },
  });

  if (userfindById.error) {
    history.push(rHome);
  }

  let [isOneClicked, setIsOneClicked] = useState(false);
  let [isBlocking, setIsBlocking] = useState(false);
  let [isUsed, setIsUsed] = useState(false);

  const {
    loading,
    error,
    data,
    refetch,
    networkStatus,
  } = useQuery(FETCH_ALL_SCIENTISTS, { notifyOnNetworkStatusChange: true });

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";

  let scientists;
  if (data) {
    scientists = data.allScientists;
  }

  function handleLink() {
    if (!isBlocking || (isUsed && !isBlocking) || (isUsed && isBlocking)) {
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("token");
      setUseReplUserId(true);
    }
  }

  function handleNewScientist() {
    history.push(rNewScientist);
  }

  function handleChangeScientist() {
    history.push(rChangeScientist);
  }

  return (
    <div>
      <div className="header_usp">
        <BlockingMessage when={isBlocking} />
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
        {data &&
          scientists.map((scientist) => (
            <Scientist
              key={scientist._id}
              name={scientist.name}
              livedIn={scientist.livedIn}
              biographicalData={scientist.biographicalData}
              topics={scientist.topics}
              biography={scientist.biography}
              isOneClicked={isOneClicked}
              setIsOneClicked={setIsOneClicked}
              setIsBlocking={setIsBlocking}
              setIsUsed={setIsUsed}
              refetch={() => refetch()}
            />
          ))}
      </div>
      <div className="div_wlinks">
        <div>
          <p className="back">
            <Link to={rStartSite}>Zurück</Link>
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
