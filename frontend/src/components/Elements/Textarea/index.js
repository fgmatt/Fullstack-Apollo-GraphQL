import React from "react";

const TextareaBiography = ({ onChange, value }) => {
  return (
    <div>
      <label>
        Kurzbiographie:
        <textarea
          name="biography"
          value={value}
          rows="8"
          cols="33"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default TextareaBiography;
