import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" onClick={handleHomeClick}>
                    <img src={logo} alt="Logo" style={logoStyle} className="rotate" />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li onClick={handleHomeClick} className={activeMenuItem === 'home' ? 'active' : ''}>
                        <Link to="/" style={{color: 'white', textDecoration: 'none' }}>Home</Link>
                    </li>
                    <li onClick={handleCatalogClick} className={activeMenuItem === 'catalog' ? 'active' : ''}>
                        <Link to="/catalog" style={{color: 'white', textDecoration: 'none' }}>Catalog</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </nav>
            <div></div>
        </header>
    );
};

export default Header;
