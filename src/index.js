import readlineSync from 'readline-sync';
import cli from './cli.js';

export default (rule, func) => {
  const name = cli();
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = func();
    console.log(`Question : ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${answer}'.\nLet 's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
