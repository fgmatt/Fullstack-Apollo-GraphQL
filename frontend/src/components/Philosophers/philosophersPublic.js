import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "@apollo/client";
import { FETCH_ALL_PHILOSOPHERS } from "../../graphQL/queries";
import Philosopher from "../Elements/Philosopher";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

export default function PhilosophersPublic() {
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

  return (
    <div>
      <Navbar />
      <div className="gridPhilosophers gridPublic">
        {data &&
          philosophers.map((philosopher) => (
            <Philosopher
              isPublic={true}
              key={philosopher._id}
              name={philosopher.name}
              livedIn={philosopher.livedIn}
              biographicalData={philosopher.biographicalData}
              topics={philosopher.topics}
              biography={philosopher.biography}
              works={philosopher.works}
              isOneClicked={false}
              setIsOneClicked={false}
              setIsBlocking={false}
              setIsUsed={false}
              refetch={() => refetch()}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}
