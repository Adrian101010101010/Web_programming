// Catalog.js

import React, { useState } from 'react';
import ElementCatalog from './ElementCatalog';
import SortSelect from '../DropdownComponent/SortSelect';
import Raptor from '../foto/F-22.jpg';
import Harrier from '../foto/AV-8B.jpg';

const Catalog = ({ onItemViewMoreClick }) => {
    const [sortOption, setSortOption] = useState('title');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Raptor',
            description: `("Raptor") is a multi-role fighter of
         the fifth generation produced by the United States, developed by Lockheed Martin and Boeing DS.`,
            price: 'Price:          20M$',
            image: Raptor,
            country: 'USA',
        },
        {
            id: 2,
            title: 'AV-8B Harrier II',
            description:
                'is a sixth-generation fighter, the development of which Japan will' +
                ' begin in 2021. It should appear in 10 years, and its main task will be to gain air superiority.',
            price: 'Price:          15M$',
            image: Harrier,
            country: 'Japan',
        },
        {
            id: 3,
            title: "RaptorMAX",
            description: `("Raptor") is a multi-role fighter of
             the fifth generation produced by the United States, developed by Lockheed Martin and Boeing DS.`,
            price: 'Price:          33M$',
            image: Raptor,
            country: 'Japan',
        },
        {
            id: 4,
            title: "AV-8B Harrier III",
            description: 'is a sixth-generation fighter, the development of which Japan will' +
                ' begin in 2021. It should appear in 10 years, and its main task will be to gain air superiority.',
            price: 'Price:          23M$',
            image: Harrier,
            country: 'Japan',
        },

    ]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    const sortData = (option) => {
        switch (option) {
            case 'title':
                return [...data].sort((a, b) => a.title.localeCompare(b.title));
            case 'price':
                return [...data].sort((a, b) => a.price.localeCompare(b.price));
            default:
                return data;
        }
    };

    const sortedData = sortData(sortOption).filter((item) => {
        if (selectedCountry && item.country !== selectedCountry) {
            return false;
        }
        if (
            searchText &&
            !(
                item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                item.description.toLowerCase().includes(searchText.toLowerCase()) ||
                item.price.toLowerCase().includes(searchText.toLowerCase())
            )
        ) {
            return false;
        }
        return true;
    });


    return (
        <div>
            <SortSelect
                value={sortOption}
                onChange={handleSortChange}
                onCountryChange={handleCountryChange}
                onSearchChange={handleSearchChange}
            />
            <div className="element_of_three">
                {sortedData.map((item, index) => (
                    <ElementCatalog
                        key={index}
                        item={item}
                        index={index}
                        onItemViewMoreClick={() => onItemViewMoreClick(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
