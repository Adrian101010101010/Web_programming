// TernaryRandom.js
import React from 'react';
import FilledWith from "../TernaryElement/FilledWith";
import getRandomData from "../RandomData/RandomData";

const TernaryRandom = ({ count }) => {
    const logoStyle = {
        width: '100%',
        height: '100%',
    };

    const getRandomDataRow = (rowIndex) => {
        const row = [];
        for (let i = 0; i < 3; i++) {
            const dataIndex = rowIndex * 3 + i;
            row.push(getRandomData(dataIndex));
        }
        return row;
    };

    const data = Array.from({ length: Math.ceil(count / 3) }, (_, rowIndex) => getRandomDataRow(rowIndex)).flat();

    // Chunk the data into subarrays of length 3
    const chunkedData = [];
    for (let i = 0; i < data.length; i += 3) {
        chunkedData.push(data.slice(i, i + 3));
    }

    return (
        <div>
            {chunkedData.map((row, rowIndex) => (
                <div key={rowIndex} className="element_of_three">
                    {row.map((item, index) => (
                        <FilledWith key={index} item={item} index={index} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TernaryRandom;
