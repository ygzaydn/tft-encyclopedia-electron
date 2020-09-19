import React from 'react';

import './Search-style.css';

const Search = ({ placeholder, searchText, searchFunction}) => {
    return (
        <input 
            className="search-bar"
            type="text"
            placeholder={placeholder}
            value={searchText}
            onChange={searchFunction}
        />  
    )
}

export default Search