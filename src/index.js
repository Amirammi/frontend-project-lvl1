import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const rules = (rule) => {
  console.log(rule);
};

const getRandomNumbers = (min, max) => {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
};

const question = (expression) => {
  console.log(`Question : ${expression}`);
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const rightAnswers = () => {
  console.log('Correct!');
};

const wrongAnswer = (answer, rightAnswer, name) => {
  console.log(`${answer} is wrong answer;(. Correct answer was ${rightAnswer}.\nLet 's try again, ${name}!`);
};

const win = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export {
  getName, rules, getRandomNumbers, question, getUserAnswer, rightAnswers, wrongAnswer,
  win,
};
