import React from "react";

const Scientist = ({ name, biographicalData, livedIn, topics, biography}) => {
  return (
    <div className="scientist">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{biographicalData}</p>
      </div>
      <div>
        <p>{livedIn}</p>
      </div>
      <div>
        <p>{topics}</p>
      </div>
      <div>
        <p>{biography}</p>
      </div>
    </div>
  );
};

export default Scientist;
