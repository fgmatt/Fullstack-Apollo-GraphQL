import React from "react";
import { Prompt } from "react-router-dom";

const BlockingMessage = ({ when }) => {
  return (
    <Prompt
      when={when}
      message={(location) =>
        `Bist du sicher, dass du zu ${location.pathname} gehen willst?`
      }
    />
  );
};

export default BlockingMessage;
