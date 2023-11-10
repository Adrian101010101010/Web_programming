import React, {useState} from 'react';


import Raptor from "../foto/F-22.jpg";

const FullInformation = () => {
    const [selectedOption2, setSelectedOption2] = useState("Option 1");

    const logoStyle = {
        width: '100%',
        height: '100%',
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    return (
        <section className="middle">
            <div className="logo1">
                <img src={Raptor} alt="Logo" style={logoStyle} className=""/>
            </div>
            <div className="item_description">
                <h1>Raptor</h1>
                <p>("Raptor") is a multi-role fighter of the fifth <br/>
                    generation produced by the United States, developed <br/>
                    by Lockheed Martin and Boeing DS. Built primarily to combat
                    <br/>enemy fighters, but also capable of ground attack,<br/>
                    reconnaissance and electronic warfare. As of 2020, the F-22<br/>
                    and F-35 are the only production fifth-generation aircraft in
                    <br/>service. According to various sources, the cost of one F-22
                    <br/>fighter is estimated from 130 to 180 million dollars. Many <br/>
                    countries around the world are interested in the F-22, but American<br/>
                    law prohibits the export of these aircraft.</p>

                <div className={"value"}>
                    <div>
                <p>Countable field</p>
                    </div>
                    <div>
                        <p>Selectable Field</p>
                        <select id="options" value={selectedOption2} onChange={handleOptionChange2}>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 2">Option 2</option>
                            <option value="Option 3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default  FullInformation;
