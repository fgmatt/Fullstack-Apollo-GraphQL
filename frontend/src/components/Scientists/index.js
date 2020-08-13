import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import { InputButton } from "../Elements/Buttons";
import Scientist from "../Elements/Scientist";
import {
  rHome,
  rMainSpace,
  rNewScientist,
  rChangeScientist,
} from "../RoutesName";
import BlockingMessage from "../Blocking";

function Scientists() {
  const history = useHistory();

  const [useReplUserId, setUseReplUserId] = useState(false);


  const userIdSession = sessionStorage.getItem("userId");
  if(!useReplUserId) {
  sessionStorage.setItem("replUserId", userIdSession);
  }
  const replUserIdSession = sessionStorage.getItem("replUserId");

  console.log(userIdSession);
  console.log(replUserIdSession);

  if (userIdSession === null && !useReplUserId) {
    history.push(rHome);
  } else {
    if (userIdSession === null) {
      sessionStorage.setItem("userId", replUserIdSession);
    }
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
      <div className="header_scientists">
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
