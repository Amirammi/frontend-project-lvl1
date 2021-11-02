import {
  getName, rules, getRandomNumbers, question, getUserAnswer, rightAnswers, wrongAnswer,
  win,
} from './index.js';

const calculation = () => {
  const name = getName();
  rules('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = getRandomNumbers(1, 50);
    const randomNumber2 = getRandomNumbers(1, 50);
    const operator = operators[getRandomNumbers(0, operators.length)];
    const expression = `${randomNumber1} ${operator} ${randomNumber2}`;
    question(expression);
    const answer = getUserAnswer();
    if (operator === '+') {
      const rightAnswer = randomNumber1 + randomNumber2;
      if (Number(answer) === rightAnswer) {
        rightAnswers();
      } else {
        wrongAnswer(answer, rightAnswer, name);
        return;
      }
    }
    if (operator === '-') {
      const rightAnswer = randomNumber1 - randomNumber2;
      if (Number(answer) === rightAnswer) {
        rightAnswers();
      } else {
        wrongAnswer(answer, rightAnswer, name);
        return;
      }
    }
    if (operator === '*') {
      const rightAnswer = randomNumber1 * randomNumber2;
      if (Number(answer) === rightAnswer) {
        rightAnswers();
      } else {
        wrongAnswer(answer, rightAnswer, name);
        return;
      }
    }
  }
  win(name);
};

export default calculation;
