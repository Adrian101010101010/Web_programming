// RandomData.js
import F22Image from "../foto/F-22.jpg";
import NextImage from "../foto/F-3.jpg";
import HarrierImage from "../foto/AV-8B.jpg";
const getRandomData = (index) => {
    const titles = [
        'F-22 Raptor',
        'Mitsubishi F-3',
        'AV-8B Harrier II',
        // Додайте інші назви за необхідності
    ];

    const descriptions = [
        'Description for F-22 Raptor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Description for Mitsubishi F-3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Description for AV-8B Harrier II. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        // Додайте інші описи за необхідності
    ];

    const images = [
        F22Image,
        NextImage,
        HarrierImage,
        // Додайте інші шляхи до зображень за необхідності
    ];

    const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

    return {
        title: titles[getRandomIndex(titles)],
        description: descriptions[getRandomIndex(descriptions)],
        image: images[getRandomIndex(images)],
    };
};

export default getRandomData;
