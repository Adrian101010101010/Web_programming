import React, { useState } from 'react';
import logo from '../foto/logo.png';


const Header = ({ onCatalogClick, onHomeClick }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleCatalogClick = () => {
        onCatalogClick();
        setActiveMenuItem('catalog');
    };

    const handleHomeClick = () => {
        onHomeClick();
        setActiveMenuItem('home');
    };

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
                    <li onClick={handleHomeClick} className={activeMenuItem === 'home' ? 'active' : ''}>
                        Home
                    </li>
                    <li onClick={handleCatalogClick} className={activeMenuItem === 'catalog' ? 'active' : ''}>
                        Catalog
                    </li>
                    <li>Cart</li>
                </ul>
            </nav>
            <div></div>
        </header>
    );
};

export default Header;
