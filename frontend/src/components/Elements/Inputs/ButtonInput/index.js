import React from 'react';

const ButtonInput = ({ value, type="submit", disabled=false, onClick }) => {
    return (
        <div>
            <input onClick={onClick} type={type} value={value} disabled={disabled}/>
        </div>
    )
}

export default ButtonInput;