import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { NetworkStatus } from "@apollo/client";
import { FETCH_ALL_SCIENTISTS } from "../../graphQL/queries";
import Scientist from "../Elements/Scientist";
import Navbar from "../Elements/Navbar";
import Footer from "../Elements/Footer";

export default function ScientistsPublic() {
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

  return (
    <div>
      <Navbar />
      <div className="gridScientists gridPublic">
        {data &&
          scientists.map((scientist) => (
            <Scientist
              isPublic={true}
              key={scientist._id}
              name={scientist.name}
              livedIn={scientist.livedIn}
              biographicalData={scientist.biographicalData}
              topics={scientist.topics}
              biography={scientist.biography}
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
