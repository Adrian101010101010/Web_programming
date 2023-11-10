import './css/App.css';
import Header from "./header/header";
import MiddleSection from "./MiddleSection/MiddleSection";
import TernaryElement from "./TernaryElement/TernaryElement";
import BottomSection from "./BottomSection/MiddleSection2";
function App() {
    return (
        <div className="container">
            <Header/> {/* Використовуйте компонент Header тут */}
            <MiddleSection/>
            <TernaryElement/>
            <div>
                <button className="viwe_more">
                    View More
                </button>
            </div>
           <BottomSection/>
        </div>
    );
}


export default App;
