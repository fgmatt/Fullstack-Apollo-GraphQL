import React from "react";
import TextInput from "../TextInput";

const WorksInput = ({ onChange, value }) => {
  return (
    <TextInput name="works" value={value} onChange={onChange}>
      Werke:
    </TextInput>
  );
};

export default WorksInput;
