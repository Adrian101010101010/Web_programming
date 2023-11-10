import React, { useState } from "react";

const SearchMenu = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        // Додайте ваш код для обробки пошуку з searchQuery
        console.log("Searching for:", searchQuery);
        // Очистити поле пошуку
        setSearchQuery("");
    };

    return (
        <div className="search-menu">
            <div className="search-input">
                <span role="img" aria-label="search-icon">
          🔍
        </span>
                <input className={"input-text"}
                    type="text"
                    placeholder="Enter your search query..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

            </div>
        </div>
    );
};

export default SearchMenu;
