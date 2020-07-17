import React from "react";
import TextInput from "../TextInput";

const LivedInInput = ({ onChange, value }) => {
  return (
    <TextInput name="livedIn" value={value} onChange={onChange}>
      Wohnorte:
    </TextInput>
  );
};

export default LivedInInput;
