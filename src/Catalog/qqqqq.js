import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SortSelect from '../DropdownComponent/SortSelect';
import { useNavigate, useLocation } from 'react-router-dom';
import Raptor from '../foto/F-22.jpg';
import Harrier from '../foto/AV-8B.jpg';
import {fetchProducts} from "./productsApi";
import {getProductsByValueDesc} from "./productsApi";
import {getProductsBySearch} from "./productsApi";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('description');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchText, setSearchText] = useState('');
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [applySort, setApplySort] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const productImages = [Raptor, Harrier];

    useEffect(() => {
        fetchProducts(setProducts, setSortCriteria, setSortOrder, setSearchText, setIsCountrySelected, location);
    }, [location.search]);


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
                    <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '300px' }}>
                        <img src={productImages[Math.floor(Math.random() * productImages.length)]} alt="Product" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />

                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>{product.value}</p>
                        <button className={"viwe_more2"} onClick={() => navigate(`/item/${product.id}`, { state: { product } })}>
                            View Details
                        </button>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
