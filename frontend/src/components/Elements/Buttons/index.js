import React from "react";

const SubButton = ({ value = "Bestätigen" }) => {
  return (
    <div>
      <input type="submit" value={value} />
    </div>
  );
};

const InputButton = ({ value = "Abbrechen", onClick }) => {
  return (
    <div>
      <input type="button" value={value} onClick={onClick} />
    </div>
  );
};

export { SubButton, InputButton };
