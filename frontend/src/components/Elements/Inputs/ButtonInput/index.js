import React from 'react';

const ButtonInput = ({ value, type="submit", disabled=false, onClick, className, onMouseOver, id, style }) => {
    return (
        <div id={id} className={className} onMouseOver={onMouseOver}>
            <input style={style} className="buttonInput" onClick={onClick} type={type} value={value} disabled={disabled}/>
        </div>
    )
}

export default ButtonInput;