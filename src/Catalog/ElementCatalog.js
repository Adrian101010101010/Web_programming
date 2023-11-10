// App.js
// ... (жодних змін)

// ElementCatalog.js
import React, { useState } from "react";
import FullInformation from "../FullInformation/FullInformation";

const ElementCatalog = ({ item, index }) => {
    const logoStyle = {
        height: '100%',
    };

    const [showFullInformation, setShowFullInformation] = useState(false);

    const handleViewMoreClick = () => {
        setShowFullInformation(true);
    };

    return (
        <div key={index} className="list-item" style={{ margin: '20px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="logo1">
                <img src={item.image} alt="Logo" style={logoStyle} className="" />
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {item.price && <p>{item.price}</p>}
            <button className="viwe_more2">
                View More
            </button>

        </div>
    );
};

export default ElementCatalog;
