import React from "react";

const SearchInput = ({ value, onChange, onClick }) => {
    return (
        <div className="divSearchInput">
            <input type="search" onChange={onChange} onClick={onClick} value={value} className="searchInput"/>
        </div>
    )
}

export default SearchInput;