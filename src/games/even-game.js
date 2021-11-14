import getRandomNumbers from '../random.js';
import game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const Check = () => {
  const expression = getRandomNumbers(0, 100);
  let rightAnswer = '';
  if (expression % 2 === 0) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [expression, rightAnswer];
};

const parityCheck = () => game(rule, Check);

export default parityCheck;
