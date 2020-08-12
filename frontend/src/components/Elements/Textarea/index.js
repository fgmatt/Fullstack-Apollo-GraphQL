import React from "react";

const TextareaBiography = ({ onChange, value, hasLabel=true }) => {
  return (
    <div>
      <label>
        {hasLabel && <div>Kurzbiographie:</div>}
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
