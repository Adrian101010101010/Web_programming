// SortSelect.js
import React, { useState } from 'react';

const SortSelect = ({ value, onChange, onCountryChange, onSearchChange }) => {
    const [searchText, setSearchText] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearchChange(searchText);
        }
    };

    return (
        <div className="dropdown-menu">
            <label>
                <select className="custom-select" value={value} onChange={onChange}>
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                    <option value="country">Country</option>
                </select>
            </label>
            {value === 'country' && (
                <label>
                    <select className="custom-select" onChange={(e) => onCountryChange(e.target.value)}>
                        <option value="">All</option>
                        <option value="USA">USA</option>
                        <option value="Japan">Japan</option>
                    </select>
                </label>
            )}
            <label>
                🔍
                <input
                    className={"input-text"}
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </label>
            <button className={"viwe_more2"}>Apply</button>
        </div>
    );
};

export default SortSelect;
