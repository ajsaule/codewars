// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript

function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  }

  return false;
}

// refactor...

const isDivideBy = (number, a, b) =>
  number % a === 0 && number % b === 0 ? true : false;

// shorter..

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
