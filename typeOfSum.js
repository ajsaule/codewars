// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba/train/javascript

function typeOfSum(a, b) {
  let sum = a + b;
  return typeof sum;
}

// refactored to be more concise

const typeOfSum = (a, b) => typeof (a + b);
