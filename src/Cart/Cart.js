import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../Redux/actions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const initialItems = useSelector(state => state.cart.items) || storedItems;
    const dispatch = useDispatch();
    const items = initialItems;
    const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const navigate = useNavigate();

    useEffect(() => {
        // Save cart items to local storage whenever items change
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleDecreaseQuantity = (index) => {
        dispatch(decreaseQuantity(index));
    };

    // In your component where you handle the button click
    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity({ productId }));
    };




    const confirmRemoveFromCart = (productId) => {
        const shouldRemove = window.confirm("Are you sure you want to remove this item?");
        if (shouldRemove) {
            dispatch(removeFromCart(productId));
            // Additional actions after removal if needed
        }
    };

    const handleItemClick = (productId) => {
        navigate(`/item/${productId}`);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div className={'cart'} key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', border: '5px solid gray' }}>
                    <h2
                        style={{ marginLeft: '10px', width: '200px', cursor: 'pointer' }}
                        onClick={() => handleItemClick(item.id)}
                    >
                        {item.title}
                    </h2>
                    <p>
                        <button className={'add_in_cart'} onClick={() => handleDecreaseQuantity(index)}>-</button>
                        {item.quantity}
                        <button className={'away_in_cart'} onClick={() => handleIncreaseQuantity(index)}>+</button>
                    </p>
                    <p style={{ width: '150px' }}>${item.price * item.quantity}</p>
                    <button className={'Remove_from_cart'} onClick={() => confirmRemoveFromCart(item.id)}>
                        Remove from cart
                    </button>
                </div>
            ))}

            {items.length > 0 && (
                <>
                    <h2 style={{ textAlign: 'center' }}>Total: ${total}</h2>
                    <div className={'cart_daun'} style={{ marginTop: '130px', display: 'flex', justifyContent: 'space-between' }}>
                        <button className={'Back_to_Catalog'} onClick={() => console.log('Back to Catalog')}>Back to Catalog</button>
                        <button className={'Continue'} onClick={() => console.log('Continue')}>Continue</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;