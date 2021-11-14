import getRandomNumbers from '../random.js';
import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
    const firstNumber = getRandomNumbers(0, 100);
    const secondNumber = getRandomNumbers(0, 100);
    let theSmallestNumber = 0;
    if (firstNumber < secondNumber) {
        theSmallestNumber = firstNumber;
    } else {
        theSmallestNumber = secondNumber;
    }
    const expression = `${firstNumber} ${secondNumber}`;
    let rightAnswer = '';
    for (let i = 0; i <= theSmallestNumber; i += 1) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            rightAnswer = i;
        }
    }
    rightAnswer = rightAnswer.toString();
    return [expression, rightAnswer];
};

const gcdGame = () => game(rule, gcd);

export default gcdGame;