import React from 'react';

const ButtonInput = ({ value, type="submit" }) => {
    return (
        <div>
            <input type={type} value={value} />
        </div>
    )
}

export default ButtonInput;