import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Header from './header/header';
import MiddleSection from './MiddleSection/MiddleSection';
import TernaryElement from './TernaryElement/TernaryElement';
import BottomSection from './BottomSection/MiddleSection2';
import Catalog from './Catalog/Catalog';
import FullInformation from './FullInformation/FullInformation';
import Fullnformation1 from "./FullInformation/Fullnformation1";
import Fullnformation2 from "./FullInformation/Fullnformation2";
import TernaryRandom from "./RandomData/TernaryRandom";
import ProductList from "./Catalog/qqqqq";
import Cart from "./Cart/Cart";
import { Provider } from 'react-redux';
import store from './Redux/store';
import FullInformation1 from "./FullInformation/Fullnformation1";
import FullInformation2 from "./FullInformation/Fullnformation2";
function App() {
    const [showCatalog, setShowCatalog] = useState(false);
    const [ternaryElementsCount, setTernaryElementsCount] = useState(1);
    const [showFullInformation, setShowFullInformation] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const handleCatalogClick = () => {
        setShowCatalog(true);
        setShowFullInformation(false);
    };

    const handleHomeClick = () => {
        setShowCatalog(false);
        setShowFullInformation(false);
    };

    const handleViewMoreClick = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setLoading(false);
            setTernaryElementsCount(prevCount => prevCount + 1);
            setShowCatalog(false);
            setShowFullInformation(true);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };

    const handleItemViewMoreClick = item => {
        setSelectedItem(item);
        setShowFullInformation(true);
    };

    const handleCloseFullInformation = () => {
        setSelectedItem(null);
        setShowFullInformation(false);
    };

    return (
        <Provider store={store}>
        <Router>
            <div className="container">
                <Header onCatalogClick={handleCatalogClick} onHomeClick={handleHomeClick} />
                <div className={showCatalog ? 'fade-in' : ''}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <MiddleSection />
                                    <TernaryElement />
                                    {[...Array(ternaryElementsCount)].map((_, index) => (
                                        <TernaryRandom key={index} count={ternaryElementsCount} />
                                    ))}
                                    {loading && <div className="loading-circle"></div>}
                                    <button className="viwe_more" onClick={handleViewMoreClick}>
                                        View More
                                    </button>
                                </div>
                            }
                        />
                        <Route
                            path="/catalog"
                            element={
                                products ? (
                                    <ProductList products={products} />
                                ) : (
                                    <div>Loading...</div>
                                )
                            }
                        />
                        <Route
                            path="/item/:id"
                            element={
                                <FullInformation item={selectedItem} onClose={handleCloseFullInformation} />
                            }
                        />
                        <Route
                            path="/item/11"
                            element={<Fullnformation1 onClose={handleCloseFullInformation} />}
                        />
                        <Route
                            path="/item/12"
                            element={<Fullnformation2 onClose={handleCloseFullInformation} />}
                        />
                        <Route
                        path="/cart"
                        element={<Cart/>}
                        />
                    </Routes>
                </div>

                <BottomSection />
            </div>
        </Router>
        </Provider>

    );
}

export default App;
