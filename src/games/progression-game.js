import getRandomNumbers from '../random.js';
import game from '../index.js';

const rule = 'What number is missing in the progression?';

const progression = () => {
    const arr = [];
    const length = getRandomNumbers(5, 10);
    const diff = getRandomNumbers(1, 10);
    arr.push(diff);
    for (let i = 1; i <= length; i += 1) {
        arr[i] = arr[i - 1] + diff;
    }
    const missingNumber = getRandomNumbers(0, length);
    const rightAnswer = arr[missingNumber].toString();
    arr.splice(missingNumber, 1, '..');
    const expression = arr.join(' ');
    return [expression, rightAnswer];
};

const progressionGame = () => game(rule, progression);
export default progressionGame;