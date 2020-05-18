import React from "react";

const Email = ({ value, onChange }) => {
  return (
    <div>
      <label>
        E-Mail:
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
