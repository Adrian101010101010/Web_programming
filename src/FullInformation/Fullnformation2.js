import React, { useState, useEffect } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Raptor from '../foto/F-22.jpg';
import Harrier from '../foto/AV-8B.jpg';
import {fetchProducts3, getProductsBySearch, getProductsByValueDesc} from "../Catalog/productsApi";
import SortSelect from "../DropdownComponent/SortSelect";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/actions';

const FullInformation2 = () => {
    const [products, setProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('description');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchText, setSearchText] = useState('');
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [applySort, setApplySort] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const productImages = [Harrier];
    const [selectedOption2, setSelectedOption2] = useState("Option 1");
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        fetchProducts3(setProducts, setSortCriteria, setSortOrder, setSearchText, setIsCountrySelected, location);
    }, [location.search]);


    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, price: product.value, quantity }));
        setIsAddedToCart(true);
    };

    const handleSortChange = (criteria) => {
        const newOrder = criteria === sortCriteria ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortCriteria(criteria);
        setSortOrder(newOrder);
    };

    const handleSearchChange = (text) => {
        setSearchText(text);

        getProductsBySearch(text, setProducts);
    };


    const handleSortClick = () => {
        // Toggle between ascending and descending order if the same criteria is selected
        const newOrder = sortCriteria === 'description' ? (sortOrder === 'asc' ? 'desc' : 'asc') : 'asc';
        setSortOrder(newOrder);

        // Trigger the sort by changing the applySort state
        setApplySort(prevState => !prevState);
    };

    const handleSortByValueClick = () => {
        setSortCriteria('value');
        setApplySort(prevState => !prevState);

        getProductsByValueDesc(setProducts);
    };


    const handleCountryChange = (country) => {
        setIsCountrySelected(!!country);
    };

    const handleAlert = () => {
        alert('Елемент додано');
        setIsAddedToCart(false);
    };

    const sortedProducts = [...products].filter((product) => {
        const searchableFields = [
            product.title.toLowerCase(),
            product.description.toLowerCase(),
            product.value.toLowerCase(),
        ];

        return searchableFields.some(field => field.includes(searchText.toLowerCase()));
    }).sort((a, b) => {
        const aValue = a[sortCriteria];
        const bValue = b[sortCriteria];

        if (sortCriteria === 'country') {
            return sortOrder === 'asc' ? aValue.localeCompare(bValue, undefined, { sensitivity: 'base' }) : bValue.localeCompare(aValue, undefined, { sensitivity: 'base' });
        } else if (sortCriteria === 'price') {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        } else if (sortCriteria === 'description') {
            return sortOrder === 'asc' ? aValue.length - bValue.length : bValue.length - aValue.length;
        } else if (sortCriteria === 'value') {
            return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }

        // Handle other sorting criteria if needed
        return 0;
    });

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const onClose = () => {
        // Navigate back to the "/catalog" route when the "Close" button is clicked
        navigate('/catalog');
    };

    return (
        <div>
            <SortSelect
                value={sortCriteria}
                onChange={handleSortChange}
                onSearchChange={handleSearchChange}
                onCountryChange={handleCountryChange}
                onSortClick={handleSortClick}
                onSortByValueClick={handleSortByValueClick}
            />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {sortedProducts.map(product => (
                    <div key={product.id}>
                        <section className="middle">
                            <img src={productImages[Math.floor(Math.random() * productImages.length)]} alt="Product" style={{ width: '600px', height: '350px', objectFit: 'cover' }} />
                            <div className="item_description">
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>

                                <div className={"value"}>
                                    <button className={'button_'} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <h2>{quantity}</h2>
                                    <button className={'button_'} onClick={() => setQuantity(quantity + 1)}>+</button>
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
                            <p>${product.value * quantity}</p>
                            <div className="button-container">
                                <button onClick={onClose} className="close-button">
                                    Close
                                </button>
                                <button
                                    className="Add-button"
                                    onClick={() => {
                                        handleAddToCart({ ...product, price: product.value, quantity, title: product.title });
                                        handleAlert();
                                    }}
                                >
                                    Add to cart
                                </button>
                                {isAddedToCart && <div className="alert">Елемент додано</div>}
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FullInformation2;
