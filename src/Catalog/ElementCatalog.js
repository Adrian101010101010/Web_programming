import React from 'react';
import { useNavigate } from 'react-router-dom';

const ElementCatalog = ({ item, onItemViewMoreClick }) => {
    const navigate = useNavigate();  // Ensure you are using useNavigate hook
    const logoStyle = {
        height: '100%',
    };

    const handleViewMoreClick = () => {
        // Call onItemViewMoreClick before navigation for other necessary actions
        onItemViewMoreClick(item);

        // Get the item id (if it exists) and navigate to the FullInformation page
        const itemId = item.id; // Replace with your own way of getting the identifier
        navigate(`/item/${itemId}`);
    };

    return (
        <div className="list-item" style={{ margin: '20px', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="logo1">
                <img src={item.image} alt="Logo" style={logoStyle} className="" />
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {item.price && <p>{item.price}</p>}
            <button className="viwe_more2" onClick={handleViewMoreClick}>
                View More
            </button>
        </div>
    );
};

export default ElementCatalog;
