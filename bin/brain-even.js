#!/usr/bin/env node

import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

function getRandomNumbers(min, max) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}

const parityCheck = () => {
  const name = cli();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumbers(1, 30);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answer === 'yes')
      || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      return;
    } else if (randomNumber % 2 !== 0 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

parityCheck();
