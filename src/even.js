import readlineSync from 'readline-sync';
import cli from './cli.js';
import getRandomNumbers from './index.js';

const parityCheck = () => {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const expression = getRandomNumbers(1, 30);
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if ((expression % 2 === 0 && answer === 'yes')
        || (expression % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (expression % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    } else if (expression % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default parityCheck;
