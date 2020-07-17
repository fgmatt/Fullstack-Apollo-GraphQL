import React from "react";
import TextInput from "../TextInput";

const BiographicalData = ({ onChange, value }) => {
  return (
    <TextInput name="biographicalData" value={value} onChange={onChange}>
      Lebensdaten:
    </TextInput>
  );
};

export default BiographicalData;
