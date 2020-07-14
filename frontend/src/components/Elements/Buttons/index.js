import React from "react";
import "./style.css"

const SubButton = ({ value = "Bestätigen", className }) => {
  return (
    <div className={className}>
      <input type="submit" value={value} />
    </div>
  );
};

const InputButton = ({ value = "Abbrechen", onClick, className }) => {
  return (
    <div className={className}>
      <input className="button_login" type="button" value={value} onClick={onClick} />
    </div>
  );
};

export { SubButton, InputButton };
