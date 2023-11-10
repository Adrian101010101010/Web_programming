// SelectMenu.js
import React, { useState } from 'react';
import Select from './ConfigurationSelect';

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
    };

    const [selectedModel, setSelectedModel] = useState('');
    const [selectedConfiguration, setSelectedConfiguration] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleOptionChange = (value, category) => {
        if (category === 'models') {
            setSelectedModel(value);
        } else if (category === 'configurations') {
            setSelectedConfiguration(value === 'all' ? '' : value);
        } else if (category === 'countries') {
            setSelectedCountry(value === 'all' ? '' : value);
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
                                    : ''
                    }
                    handleOptionChange={(value) => handleOptionChange(value, category)}
                    options={
                        category === 'configurations' || category === 'countries'
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
