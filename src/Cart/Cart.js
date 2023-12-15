import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../Redux/actions';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Redux/actions';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Move this line below the useDispatch and useNavigate lines
    const items = useSelector(state => state.cart.items);

    // Now you can safely use items to calculate total
    const total = items.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
        // Save cart items to local storage whenever items change
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    const handleContinue = () => {
        dispatch(clearCart());
        navigate('/checkout');
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleDecreaseQuantity = (index) => {
        dispatch(decreaseQuantity(index));
    };

    const handleIncreaseQuantity = (index) => {
        dispatch(increaseQuantity(index));
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
                        <button className={'Continue'} onClick={handleContinue}>Continue</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
