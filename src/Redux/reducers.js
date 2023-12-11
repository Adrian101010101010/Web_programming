// reducers.js
// reducers.js
const initialCartState = {
    items: [],
};


const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // If the item already exists, update the quantity
                const updatedItems = [...state.items];
                updatedItems[existingItemIndex].quantity += action.payload.quantity;

                return {
                    ...state,
                    items: updatedItems,
                };
            } else {
                // If the item doesn't exist, add it to the cart
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            }

        case 'REMOVE_FROM_CART':
            const itemIndex = state.items.findIndex(item => item.id === action.productId);
            if (itemIndex !== -1) {
                // Handle removal logic...
            }
            return {
                ...state,
                items: [...state.items.slice(0, itemIndex), ...state.items.slice(itemIndex + 1)],
            };
        // reducers.js
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                items: (state.items || []).map((item) =>
                    item.id === action.payload.productId ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };


        case 'DECREASE_QUANTITY':
            return {
                ...state,
                items: (state.items || []).map((item) =>
                    item.id === action.payload.productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;
