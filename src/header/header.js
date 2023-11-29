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

        // Показати лого та навігацію протягом 5 секунд
        setTimeout(() => {
            // Приховати лого та навігацію після 5 секунд
            setTimeout(() => {
                setShowLogo(false);
            }, 5000);
        }, 1000);
    };

    const handleHomeClick = () => {
        onHomeClick();
        setActiveMenuItem('home');
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
            {/* Відображення логотипу затримкою */}
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
                    <li onClick={handleHomeClick} className={activeMenuItem === 'home' ? 'active' : ''}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            Home
                        </Link>
                    </li>
                    <li onClick={handleCatalogClick} className={activeMenuItem === 'catalog' ? 'active' : ''}>
                        <Link to="/catalog" style={{ color: 'white', textDecoration: 'none' }}>
                            Catalog
                        </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </nav>
            <div></div>
        </header>
    );
};

export default Header;
