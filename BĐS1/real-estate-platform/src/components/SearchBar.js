import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const onChange = (event) => {
        console.log('Current setSearchTerm:', setSearchTerm);
        if (typeof setSearchTerm === 'function') {
            setSearchTerm(event.target.value);
        } else {
            console.error("setSearchTerm is not a function");
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={onChange}
                placeholder="Tìm kiếm bất động sản..."
            />
        </div>
    );
};

export default SearchBar;
