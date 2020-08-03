import React from "react";

const ContentBoxScientist = ({ children, n }) => {
  return (
    <div className="ContentBoxScientist">
      <div>
        <p>{children.allScientists[n].name}</p>
      </div>
      <div>
        <p>{children.allScientists[n].biographicalData}</p>
      </div>
      <div>
        <p>{children.allScientists[n].livedIn}</p>
      </div>
      <div>
        <p>{children.allScientists[n].topics}</p>
      </div>
      <div>
        <p>{children.allScientists[n].biography}</p>
      </div>
    </div>
  );
};

export default ContentBoxScientist;
