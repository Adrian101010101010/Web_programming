// SelectMenu.js
import React, { useState } from 'react';
import Select from './ConfigurationSelect';
import SortSelect from "./SortSelect";
function SelectMenu() {
    const data = {
        models: [
            { value: 'Model 1', label: 'Model 1' },
            { value: 'Model 2', label: 'Model 2' },
            { value: 'Model 3', label: 'Model 3' },
        ],
        configurations: [
            { value: 'Configuration 1', label: 'bum bag' },
            { value: 'Configuration 2', label: 'average' },
            { value: 'Configuration 3', label: 'full' },
        ],
        countries: [
            { value: 'Country 1', label: 'China' },
            { value: 'Country 2', label: 'Ukraine' },
            { value: 'Country 3', label: 'USA' },
        ],
        sortOrders: [
            { value: 'asc', label: 'Ascending' },
            { value: 'desc', label: 'Descending' },
        ],
    };

    const [selectedModel, setSelectedModel] = useState('all');
    const [selectedConfiguration, setSelectedConfiguration] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedSortOrder, setSelectedSortOrder] = useState('asc'); // Додайте стан для обраного порядку сортування

    const handleOptionChange = (value, category) => {
        if (category === 'models') {
            setSelectedModel(value === 'all' ? '' : value);
        } else if (category === 'configurations') {
            setSelectedConfiguration(value === 'all' ? '' : value);
        } else if (category === 'countries') {
            setSelectedCountry(value === 'all' ? '' : value);
        } else if (category === 'sortOrders') {
            setSelectedSortOrder(value);
        }
    };

    return (
        <div>
            {Object.entries(data).map(([category, options]) => (
                <Select
                    key={category}
                    selectedOption={
                        category === 'models'
                            ? selectedModel
                            : category === 'configurations'
                                ? selectedConfiguration || 'all'
                                : category === 'countries'
                                    ? selectedCountry || 'all'
                                    : category === 'sortOrders' // Додайте умову для порядку сортування
                                        ? selectedSortOrder
                                        : ''
                    }
                    handleOptionChange={(value) => handleOptionChange(value, category)}
                    options={
                        category === 'configurations' || category === 'countries' || category === 'models' || category === 'sortOrders' // Додайте умову для порядку сортування
                            ? [{ value: 'all', label: 'all' }, ...options]
                            : options
                    }
                    label={category}
                />
            ))}
        </div>
    );
}

export default SelectMenu;