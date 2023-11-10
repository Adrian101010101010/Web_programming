// ConfigurationSelect.js
import React from 'react';

const ModelsSelect = ({ selectedConfiguration, handleConfigurationChange, configurations }) => (
    <select
        id="configurationSelect"
        value={selectedConfiguration}
        onChange={(e) => handleConfigurationChange(e.target.value)}
    >
        <option value="" disabled>all</option>
        {configurations.map((config, index) => (
            <option key={index} value={config.value}>
                {config.label}
            </option>
        ))}
    </select>
);

export default ModelsSelect;
