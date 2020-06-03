import React from "react";

const Email = ({ value, onChange, children }) => {
  return (
    <div>
      <label>
        {children}
        <input
          name="email"
          type="email"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Email;
