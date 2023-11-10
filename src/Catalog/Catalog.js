import React from 'react';
import Raptor from "../foto/F-22.jpg";
import next from "../foto/F-3.jpg";
import Harrier from "../foto/AV-8B.jpg";
import ElementCatalog from "./ElementCatalog";
const Catalog = () => {
    const logoStyle = {
        width: '100%',
        height: '100%',


    };
    const data = [
        {
            title: "Raptor",
            description: `("Raptor") is a multi-role fighter of
             the fifth generation produced by the United States, developed by Lockheed Martin and Boeing DS.`,
            price: 'Price:          20M$',
            image: Raptor,
        },
        {
            title: "AV-8B Harrier II",
            description: 'is a sixth-generation fighter, the development of which Japan will' +
                ' begin in 2021. It should appear in 10 years, and its main task will be to gain air superiority.',
            price: 'Price:          15M$',
            image: Harrier,
        },
        {
            title: "RaptorMAX",
            description: `("Raptor") is a multi-role fighter of
             the fifth generation produced by the United States, developed by Lockheed Martin and Boeing DS.`,
            price: 'Price:          33M$',
            image: Raptor,
        },
        {
            title: "AV-8B Harrier III",
            description: 'is a sixth-generation fighter, the development of which Japan will' +
            ' begin in 2021. It should appear in 10 years, and its main task will be to gain air superiority.',
            price: 'Price:          23M$',
            image: Harrier,
        },
    ];
    const handleItemViewMoreClick = () => {
        // Тут ви можете визначити логіку для обробки натискання кнопки "View More" в елементі Catalog
        // Наприклад, приховати сам Catalog або викликати інші події.
    };
    return (
        <div className="element_of_three">
            {data.map((item, index) => (
                <ElementCatalog key={index} item={item} index={index} onItemViewMoreClick={handleItemViewMoreClick}/>
            ))}
        </div>
    );
};


export default  Catalog;
