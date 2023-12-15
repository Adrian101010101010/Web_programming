// actions.js
export const decreaseQuantity = (index) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: index,
    };
};


export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: productId,
    };
};

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

export const updateCart = (updatedItems) => {
    return {
        type: 'UPDATE_CART',
        payload: updatedItems,
    };
};
/*
export const increaseQuantity = (index, currentQuantity) => ({
    type: 'INCREASE_QUANTITY',
    payload: { index, currentQuantity },
});*/

// actions.js
export const increaseQuantity = (index) => ({
    type: 'INCREASE_QUANTITY',
    payload: index,
});
export const CLEAR_CART = 'CLEAR_CART';
export const clearCart = () => ({
    type: CLEAR_CART,
});