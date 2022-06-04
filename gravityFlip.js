// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip = (d, a) => {
  if (d === "R") {
    return a.sort((a, b) => a - b);
  } else if (d === "L") {
    return a.sort((a, b) => b - a);
  }
};

// Refactored with ternary:
const flip2 = (d, a) =>
  d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);

// Shorter ternary version
const flip3 = (d, a) => a.sort((a, b) => (d === "R" ? a - b : b - a));
