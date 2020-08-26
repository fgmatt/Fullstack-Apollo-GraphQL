import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "@apollo/client";
import { FETCH_ALL_PHILOSOPHERS } from "../../graphQL/queries";
import Philosopher from "../Elements/Philosopher";
import { rHome, rMainSpace } from "../RoutesName";
import BlockingMessage from "../Blocking";
import NewPhilosopherDialog from "../Elements/NewPhilosopherDialog";
import AltNewPhilosopherDialog from "../Elements/AltNewPhilosopherDialog";

export default function Philosophers() {
  const history = useHistory();

  const [useReplUserId, setUseReplUserId] = useState(false);

  const userIdSession = sessionStorage.getItem("userId");
  if (!useReplUserId) {
    sessionStorage.setItem("replUserId", userIdSession);
  }
  const replUserIdSession = sessionStorage.getItem("replUserId");

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
  } = useQuery(FETCH_ALL_PHILOSOPHERS, { notifyOnNetworkStatusChange: true });

  if (networkStatus === NetworkStatus.refetch) return "Refetching!";

  let philosophers;
  if (data) {
    philosophers = data.allPhilosophers;
  }

  function handleLink() {
    if (!isBlocking || (isUsed && !isBlocking) || (isUsed && isBlocking)) {
      sessionStorage.removeItem("userId");
      setUseReplUserId(true);
    }
  }

  return (
    <div>
      <div className="header_usp">
        <BlockingMessage when={isBlocking} />
        <h1>Philosophen</h1>
        <div>
          <p className="logout">
            <Link to={rHome} onClick={handleLink}>
              Logout
            </Link>
          </p>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      <div className="gridPhilosophers">
        {data &&
          philosophers.map((philosopher) => (
            <Philosopher
              key={philosopher._id}
              name={philosopher.name}
              livedIn={philosopher.livedIn}
              biographicalData={philosopher.biographicalData}
              topics={philosopher.topics}
              biography={philosopher.biography}
              works={philosopher.works}
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
            <Link to={rMainSpace}>Zurück</Link>
          </p>
        </div>
        <NewPhilosopherDialog />
        <AltNewPhilosopherDialog />
      </div>
    </div>
  );
}
