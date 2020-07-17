import React from "react";
import TextInput from "../TextInput";

const TopicInput = ({ onChange, value }) => {
  return (
    <TextInput name="topics" value={value} onChange={onChange}>
      Gebiete:
    </TextInput>
  );
};

export default TopicInput;
