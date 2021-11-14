import getRandomNumbers from '../random.js';
import game from '../index.js';

const operands = ['+', '-', '*'];

const rule = 'What is the result of the expression?';
const getExpressionAndAnswer = () => {
  const randomNumber1 = getRandomNumbers(1, 50);
  const randomNumber2 = getRandomNumbers(1, 50);
  const operand = operands[getRandomNumbers(0, 3)];
  const expression = `${randomNumber1} ${operand} ${randomNumber2}`;
  let rightAnswer = 0;
  if (operand === '+') {
    rightAnswer = randomNumber1 + randomNumber2;
  } else if (operand === '-') {
    rightAnswer = randomNumber1 - randomNumber2;
  } else if (operand === '*') {
    rightAnswer = randomNumber1 * randomNumber2;
  }
  rightAnswer = rightAnswer.toString();
  return [expression, rightAnswer];
};

const Calc = () => game(rule, getExpressionAndAnswer);
export default Calc;
