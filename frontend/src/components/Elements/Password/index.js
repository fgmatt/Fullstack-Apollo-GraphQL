import React from "react";

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

export default PasswordInput ;
