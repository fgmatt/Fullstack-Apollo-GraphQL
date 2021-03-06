import React from 'react';

const TextInput = ({ value, onChange, name, type="text", children }) => {
    return (
      <div>
        <label>
          {children}
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  };

export default TextInput;