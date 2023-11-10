import React, { useState } from 'react';
import './css/App.css';
import Header from "./header/header";
import MiddleSection from "./MiddleSection/MiddleSection";
import TernaryElement from "./TernaryElement/TernaryElement";
import BottomSection from "./BottomSection/MiddleSection2";
import Catalog from "./Catalog/Catalog";
import DropdownComponent from "./DropdownComponent/DropdownComponent";
import FullInformation from "./FullInformation/FullInformation";
import ButtonInformation from "./ButtonInformation/ButtonInformation";

function App() {
    const [showCatalog, setShowCatalog] = useState(false);
    const [ternaryElementsCount, setTernaryElementsCount] = useState(1);
    const [showFullInformation, setShowFullInformation] = useState(false);

    const handleCatalogClick = () => {
        setShowCatalog(true);
        setShowFullInformation(false);
    };

    const handleHomeClick = () => {
        setShowCatalog(false);
        setShowFullInformation(false);
    };

    const handleViewMoreClick = () => {
        setTernaryElementsCount(prevCount => prevCount + 1);
        setShowFullInformation(false);
    };

    const handleShowFullInformation = () => {
        setShowCatalog(false);
        setShowFullInformation(true);
    };

    return (
        <div className="container">
            <Header onCatalogClick={handleCatalogClick} onHomeClick={handleHomeClick}/>
            <div>
                {showCatalog ? (
                    <div>
                        <DropdownComponent/>
                        <Catalog />

                    </div>
                ) : (
                    <div>
                        {showFullInformation ? (
                            <FullInformation />
                        ) : (
                            <>
                                <MiddleSection />
                                {[...Array(ternaryElementsCount)].map((_, index) => (
                                    <TernaryElement key={index} />
                                ))}
                                <button className="viwe_more" onClick={handleViewMoreClick}>
                                    View More
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
            <BottomSection/>
        </div>
    );
}

export default App;
