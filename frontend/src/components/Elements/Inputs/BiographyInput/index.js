import React from "react";
import TextInput from "../TextInput";

const BiographyInput = ({ onChange, value  }) => {
  return (
    <TextInput name="biography" value={value} onChange={onChange}>
      Biographie:
    </TextInput>
  );
};

export default BiographyInput;
