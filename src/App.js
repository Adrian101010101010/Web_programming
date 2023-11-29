import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Header from './header/header';
import MiddleSection from './MiddleSection/MiddleSection';
import TernaryElement from './TernaryElement/TernaryElement';
import BottomSection from './BottomSection/MiddleSection2';
import Catalog from './Catalog/Catalog';
import FullInformation from './FullInformation/FullInformation';
import TernaryRandom from "./RandomData/TernaryRandom";
import ProductList from "./Catalog/qqqqq";
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
                          /*  element={
                                <Catalog onItemViewMoreClick={handleItemViewMoreClick} />
                            }*/
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
                    </Routes>
                </div>

                <BottomSection />
            </div>
        </Router>
    );
}

export default App;
