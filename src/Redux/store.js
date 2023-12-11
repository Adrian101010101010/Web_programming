// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Your root reducer

// Load cart items from local storage
const loadCartItemsFromLocalStorage = () => {
    try {
        const serializedCartItems = localStorage.getItem('cartItems');
        if (serializedCartItems === null) {
            return undefined;
        }
        return JSON.parse(serializedCartItems);
    } catch (err) {
        console.error('Error loading cart items from local storage:', err);
        return undefined;
    }
};

// Initialize store with persisted data
const initialState = {
    cart: {
        items: loadCartItemsFromLocalStorage() || [],
    },
    // ... other reducers and initial states
};

const store = createStore(rootReducer, initialState);

// Subscribe to store changes and update local storage
store.subscribe(() => {
    const { cart } = store.getState();
    localStorage.setItem('cartItems', JSON.stringify(cart.items));
});

export default store;
