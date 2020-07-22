import React from "react";

const SelectName = ({ children, onChange, value }) => {
  return (
    <select name="selectName" onChange={onChange} value={value}>
      <option value="">Wähle Persöhnlichkeit aus</option>
      {children}
    </select>
  );
};

export default SelectName;
