import React from "react";

const FilledWith = ({ item, index }) => {
    const logoStyle = {
        width: '100%',
        height: '100%',
    };

    return (
        <div key={index} className="list-item" style={{ margin: '10px', width: '450px' }}>
            <div className="logo1">
                <img src={item.image} alt="Logo" style={logoStyle} className="" />
            </div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default FilledWith;