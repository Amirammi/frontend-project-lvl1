import getRandomNumbers from '../random.js';
import game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const expression = getRandomNumbers(1, 100);
  let rightAnswer = '';
  for (let i = 2; i <= expression; i += 1) {
    if (expression % i === 0 && i < expression) {
      rightAnswer = 'no';
      break;
    } else if (expression % i === 0 && i === expression) {
      rightAnswer = 'yes';
    }
  }
  return [expression, rightAnswer];
};

const primeGame = () => game(rule, isPrime);
export default primeGame;
