import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../foto/logo.png';

const Header = ({ onCatalogClick, onHomeClick }) => {
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const [showLogo, setShowLogo] = useState(false);

    const handleCatalogClick = () => {
        onCatalogClick();
        setShowLogo(true);
        setActiveMenuItem('catalog');

        setTimeout(() => {
            setTimeout(() => {
                setShowLogo(false);
            }, 1000);
        }, 1000);
    };

    const handleHomeClick = () => {
        onHomeClick();
        setActiveMenuItem('home');
    };

    const handleCartClick = () => {
        setActiveMenuItem('cart');
    };

    const logoStyle = {
        width: '100%',
        height: '100%',
    };

    const logoStyle1 = {
        width: '60%',
        height: '60%',
    };

    return (
        <header className="header">
            {showLogo ? (
                <div className="logo-overlay">
                    <img src={logo} alt="Logo" style={logoStyle1} className="rotate1" />
                    <p className={"pppp"}>Loading...</p>
                </div>
            ) : (
                <div className="logo">
                    <Link to="/" onClick={handleHomeClick}>
                        <img src={logo} alt="Logo" style={logoStyle} className="rotate" />
                    </Link>
                </div>
            )}
            <nav className={`nav ${showLogo ? 'hidden' : ''}`}>
                <ul>
                    <li onClick={handleHomeClick} className={activeMenuItem === 'home' ? 'active' : ''} style={{  cursor: 'pointer' }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none', width: '100%', height: '100%' }}>
                            Home
                        </Link>
                    </li>
                    <li onClick={handleCatalogClick} className={activeMenuItem === 'catalog' ? 'active' : ''} style={{  cursor: 'pointer' }}>
                        <Link to="/catalog" style={{ color: 'white', textDecoration: 'none', width: '100%', height: '100%' }}>
                            Catalog
                        </Link>
                    </li>
                    <li onClick={handleCartClick} className={activeMenuItem === 'cart' ? 'active' : ''} style={{  cursor: 'pointer' }}>
                        <Link to="/cart" style={{ color: 'white', textDecoration: 'none', width: '100%', height: '100%' }}>
                            Cart
                        </Link>
                    </li>
                </ul>
            </nav>
            <div></div>
        </header>
    );
};

export default Header;
