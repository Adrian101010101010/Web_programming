import React from 'react';

const CountrySelect = ({ onCountryChange }) => {
    return (
        <label>
            <select className="custom-select" onChange={(e) => onCountryChange(e.target.value)}>
                <option value="">All</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
            </select>
        </label>
    );
};

export default CountrySelect;
