import React from 'react';
import { useNavigate } from 'react-router-dom';
const SuccessMessage = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        // Логіка для переходу на "/catalog"
        navigate('/catalog');
    };
    return (
        <div style={containerStyle}>
            <div style={{fontSize: '50px', color: 'green'}}>✔</div>
            <h2>Success!</h2>
            <p>Your order was sent for processing!</p>
            <p>Check your email box for further information.</p>
            <button className={'back_to_catalog'} onClick={handleGoBack}>Go back to Catalog</button>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Зробимо контейнер на весь екран
};

export default SuccessMessage;
