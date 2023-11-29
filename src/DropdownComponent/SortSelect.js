import React, {useState} from 'react';

const SortSelect = ({onSortChange, onSearchChange, onCountryChange, onSortClick, onSortByValueClick}) => {
    const [searchText, setSearchText] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearchChange(searchText);
            onSortClick(); // Call the sorting function passed from ProductList
        }
    };

    return (
        <div className="dropdown-menu">
            <div>
                <button className={"viwe_more2"} onClick={() => {
                    onSearchChange(searchText);
                    onSortClick();
                }}>Sort by ABC
                </button>
                <button className={"viwe_more2"} onClick={onSortByValueClick}>Sort by Praise</button>
            </div>
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
            <p> </p>
        </div>
    );
};

export default SortSelect;
