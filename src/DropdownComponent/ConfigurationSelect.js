// Select.js
import React from 'react';

const Select = ({ selectedOption, handleOptionChange, options, label }) => (
    <select
        id={`${label.toLowerCase()}Select`}
        value={selectedOption}
        className="custom-select"
        onChange={(e) => handleOptionChange(e.target.value)}
    >
        <option value="" disabled>all</option>
        {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))}
    </select>
);

export default Select;
