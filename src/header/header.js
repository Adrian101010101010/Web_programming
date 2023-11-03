import React from 'react';
import logo from '../foto/logo.png';

const Header = () => {
    const logoStyle = {
        width: '100%',
        height: '100%',


    };
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" style={logoStyle} className="rotate" />
            </div>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>Catalog</li>
                    <li>Cart</li>
                </ul>
            </nav>
            <div></div>
        </header>
    );
};

export default Header;
