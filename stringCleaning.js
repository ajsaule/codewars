// https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/javascript

// First solution:

const stringClean = (s) =>
  s
    .split("")
    .map((char) => (/"|'/g.test(char) ? char : ""))
    .join("");

// cleaner one line solution:

const stringCleaning = (s) => s.replace(/\d/g, "");

const stringCleaningV2 = (s) => s.replace(/"|'/g, "");

const stringCleanV2 = (s) =>
  s
    .split("")
    .map((char) => (/"|'/g.test(char) ? char : ""))
    .join("");
