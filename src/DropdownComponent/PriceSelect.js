import React from 'react';

const PriceSelect = ({ value, onChange }) => {
    return (
        <label>
            <select className="custom-select" value={value} onChange={onChange}>
                <option value="price">Price</option>
            </select>
        </label>
    );
};

export default PriceSelect;
