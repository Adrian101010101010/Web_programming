import React from 'react';
import Raptor from "../foto/F-22.jpg";
import next from "../foto/F-3.jpg";
import Harrier from "../foto/AV-8B.jpg";
import FilledWith from "./FilledWith";

const TernaryElement = () => {
    const logoStyle = {
        width: '100%',
        height: '100%',


    };
    const data = [
        {
            title: "F-22 Raptor",
            description: `("Raptor") is a multi-role fighter of
             the fifth generation produced by the United States, developed by Lockheed Martin and Boeing DS. 
  Built primarily to combat enemy fighters, but also capable of ground attack, reconnaissance and electronic warfare. As of 2020, the F-22 and F-35 are the only production fifth-generation aircraft in service. 
  According to various sources, the cost of one F-22 fighter is estimated from 130 to 180 million dollars. 
  Many countries around the world are interested in the F-22, but American law prohibits the export of these aircraft.`,
            image: Raptor,
        },
        {
            title: "Mitsubishi F-3",
            description: 'is a sixth-generation fighter, the development of which Japan will begin in 2021. It should appear in 10 years, and its main task will be to gain air superiority.',
            image: next,
        },
        {
            title: "AV-8B Harrier II",
            description: 'The McDonnell Douglas (now Boeing) AV-8B Harrier II is a single-engine ground-attack aircraft that constitutes the second generation of the Harrier family, capable of vertical or short takeoff and landing (V/STOL). The aircraft is primarily employed on light attack or multi-role missions, ranging from close air support of ground troops to armed reconnaissance.',
            image: Harrier,
        },
    ];

    return (
        <div className="element_of_three">
            {data.map((item, index) => (
                <FilledWith key={index} item={item} index={index} />
            ))}
        </div>
    );
};


export default  TernaryElement;
