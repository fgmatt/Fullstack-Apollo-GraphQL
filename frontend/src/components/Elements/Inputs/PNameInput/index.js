import React from "react";
import TextInput from "../TextInput";

const PNameInput = ({ onChange, value }) => {
  return (
    <TextInput name="name" value={value} onChange={onChange}>
      Name:
    </TextInput>
  );
};

export default PNameInput;
