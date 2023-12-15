const initialState = {
    cart: {
        items: [],
    },
    // other reducers and their states
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: [...state.cart.items, action.payload],
                },
            };

        case 'REMOVE_FROM_CART':
            const itemIndex = (state.cart.items || []).findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                // Handle removal logic...
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        items: [
                            ...(state.cart.items || []).slice(0, itemIndex),
                            ...(state.cart.items || []).slice(itemIndex + 1),
                        ],
                    },
                };
            }
            return state;

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: (state.cart.items || []).map((item, index) =>
                        index === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                    ),
                },
            };

        case 'CLEAR_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: [],
                },
            };

        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: (state.cart.items || []).map((item, index) =>
                        index === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                },
            };

        default:
            return state;
    }
};

export default cartReducer;
