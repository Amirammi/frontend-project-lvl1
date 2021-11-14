const getRandomNumbers = (min, max) => {
    const number = Math.random() * (max - min) + min;
    return Math.floor(number);
};

export default getRandomNumbers;