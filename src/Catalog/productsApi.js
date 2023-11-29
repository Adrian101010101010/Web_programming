import axios from 'axios';

export const productsApiUrl = 'http://localhost:35967/api/products';
export const productsByValue = 'http://localhost:35967/api/products/sortByValueDesc';

export const fetchProducts = (setProducts, setSortCriteria, setSortOrder, setSearchText, setIsCountrySelected, location) => {
    const params = new URLSearchParams(location.search);
    const criteria = params.get('criteria') || 'description';
    const order = params.get('order') || 'asc';
    const search = params.get('search') || '';
    const country = params.get('country') || '';

    setSortCriteria(criteria);
    setSortOrder(order);
    setSearchText(search);
    setIsCountrySelected(!!country);

    axios.get(productsApiUrl)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
};

export const getProductsByValueDesc = (setProducts) => {
    axios.get(productsByValue)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Помилка при отриманні продуктів:', error);
        });
};

export const getProductsBySearch = (text, setProducts) => {
    axios.get(`http://localhost:35967/getProducts?search=${text}`)
        .then(response => {
            setProducts(response.data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
};