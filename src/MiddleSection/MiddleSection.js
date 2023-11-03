import React from 'react';

import image from "../foto/image.jpg";

const MiddleSection = () => {
    const logoStyle = {
        width: '100%',
        height: '100%',


    };
    return (
        <section className="middle">
            <div className="logo1">
                <img src={image} alt="Logo" style={logoStyle} className=""/>
            </div>
            <div className="item_description">
                <h1>F-16</h1>
                <p>Developed in 1974 by General Dynamics. Put into operation in 1978.<br/>
                    In 1993, General Dynamics sold its aircraft manufacturing business<br/> to Lockheed Corporation (now Lockheed Martin).<br/>
                    The F-16, due to its versatility and relatively low cost,<br/> is the most popular fourth-generation fighter</p>
            </div>
        </section>
    );
};

export default  MiddleSection;
