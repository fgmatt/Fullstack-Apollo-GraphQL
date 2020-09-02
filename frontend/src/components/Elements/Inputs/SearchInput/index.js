import React from "react";

const SearchInput = ({ value, onChange, onKeyDown, tI }) => {
    return (
        <div className="divSearchInput">
            <input type="search" onChange={onChange} onKeyDown={onKeyDown} value={value} tabIndex={tI} className="searchInput"/>
        </div>
    )
}

export default SearchInput;