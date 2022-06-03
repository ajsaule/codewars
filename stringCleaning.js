// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

// First solution:

const stringClean = (s) =>
  s
    .split("")
    .map((char) => (/[^\d]/.test(char) ? char : ""))
    .join("");
