import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Raptor from '../foto/F-22.jpg';
import Harrier from '../foto/AV-8B.jpg';

const FullInformation = () => {
    const [selectedOption2, setSelectedOption2] = useState("Option 1");
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const productImages = [Raptor, Harrier];

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const onClose = () => {
        // Navigate back to the "/catalog" route when the "Close" button is clicked
        navigate('/catalog');
    };

    useEffect(() => {
        // Викликати API-запит при завантаженні компонента
        const fetchProduct = async () => {
            try {
                // Check if id is undefined, use a default value or handle it as needed
                const productId = id || 10; // Use 10 as the default value

                const response = await axios.get(`/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]); // Залежність id гарантує виклик API-запиту при зміні id

    if (!product) {
        // Відобразити, що дані ще завантажуються
        return <p>Loading...</p>;
    }

    return (
        <div>
            <section className="middle">
                <img src={productImages[Math.floor(Math.random() * productImages.length)]} alt="Product" style={{ width: '600px', height: '350px', objectFit: 'cover' }} />
                <div className="item_description">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>

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
                <p>${product.value}</p>
                <div className="button-container">
                    <button onClick={onClose} className="close-button">
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
