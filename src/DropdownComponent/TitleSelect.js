import React from 'react';

const TitleSelect = ({ value, onChange }) => {
    return (
        <label>
            <select className="custom-select" value={value} onChange={onChange}>
                <option value="title">Title</option>
            </select>
        </label>
    );
};

export default TitleSelect;
