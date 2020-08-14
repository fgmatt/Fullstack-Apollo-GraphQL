import React from "react";

const ScientistInput = ({ value, onChange }) => {
    return (
        <div className="divScientistInput">
            <input type="text" onChange={onChange} value={value} className="scientistInput"/>
        </div>
    )
}

export default ScientistInput;