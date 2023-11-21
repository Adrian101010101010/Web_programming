import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FullInformation = ({ item, onClose }) => {
    const [selectedOption2, setSelectedOption2] = useState("Option 1");
    const navigate = useNavigate();

    const logoStyle = {
        width: '100%',
        height: '100%',
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    useEffect(() => {
        if (item && item.id) {
            navigate(`/item/${item.id}`);
        }
    }, [item, navigate]);

    // Add a check for the item
    if (!item) {
        // You might want to handle the case where item is null or undefined
        return <div>No information available for this item.</div>;
    }

    const handleCloseClick = () => {
        // Navigate back to the "/catalog" route when the "Close" button is clicked
        navigate('/catalog');
    };

    return (
        <div>
            <section className="middle">
                <div className="logo1">
                    <img src={item.image} alt="Logo" style={logoStyle} className="" />
                </div>
                <div className="item_description">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>

                    {/* ... (other details based on the item) */}

                    <div className={"value"}>
                        <div>
                            <p>Countable field</p>
                            <input className={"Countable"} type="text" placeholder="Countable field" />
                        </div>
                        <div>
                            <p>Selectable Field</p>
                            <select id="options" value={selectedOption2} onChange={handleOptionChange2}>
                                <option value="Pric">Option 1</option>
                                <option value="complit">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section className="close-button-section">
                <p>{item.price}</p>
                <div className="button-container">
                    <button onClick={handleCloseClick} className="close-button">
                        Close
                    </button>
                    <button onClick={onClose} className="Add-button">
                        Add to cart
                    </button>
                </div>
            </section>
        </div>
    );
};

export default FullInformation;
