import React from "react";

const IconLegend = ({ children, className }) => {
  return (
    <div>
      <p className="iconLegend" className={className}>{children}</p>
    </div>
  );
};

export default IconLegend;
