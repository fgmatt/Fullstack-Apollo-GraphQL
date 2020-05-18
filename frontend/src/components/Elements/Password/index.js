import React from "react";

const Password = ({ value, onChange }) => {
  return (
    <label>
      Passwort:
      <input
        name="password"
        type="password"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const PasswordInput = ({ children, name , value, onChange }) => {
    return (
        <label>
            {children}
            <input 
                name={name}
                type="password"
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

const Passwordb = ({ value, onChange }) => {
  return (
    <label>
      Passwort B:
      <input
        name="passwordb"
        type="password"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export { Password, Passwordb, PasswordInput };
