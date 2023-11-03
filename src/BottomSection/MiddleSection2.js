import React from 'react';

import logo from "../foto/logo.png";
import facebook from "../foto/facebook.png";
import twitter from "../foto/twitter.png";
import ins from "../foto/in.png";
import G from "../foto/G+.png";

const BottomSection = () => {
    const logoStyle = {
        width: '100%',
        height: '100%',
    };
    return (
        <section className="info_series">
            <div className="info_series_top">
                <div>
                    <h1>Branding stuff</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur<br/>
                        adipiscing elit. Nunc maximus, nulla ut<br/>
                        commodo</p>
                </div>
                <div className="logo">
                    <img src={logo} alt="Logo" style={logoStyle} className="rotate"/>
                </div>
                <ul>
                    <li className="lii"><img src={facebook} alt="Logo" style={logoStyle}/></li>
                    <li className="lii"><img src={twitter} alt="Logo" style={logoStyle}/></li>
                    <li className="lii"><img src={ins} alt="Logo" style={logoStyle}/></li>
                    <li className="lii"><img src={G} alt="Logo" style={logoStyle}/></li>
                </ul>
            </div>
            <div className="divWithLine"></div>
            <p className="description">2020 IoT @ Copyright all rights reserved, bla bla</p>
        </section>
    );
};

export default  BottomSection;
