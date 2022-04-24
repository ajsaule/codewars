// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

// Solution 1: **Not working

function solve(s) {
  let lowerCase = 0;
  let upperCase = 0;
  let number = 0;
  let special = 0;

  return s.split("").reduce((char) => {
    if (/[A-Z]/.test(char)) {
      lowerCase++;
    } else if (char.toUpperCase() === char) {
      upperCase++;
    } else if (typeof parseFloat(char) === "number") {
      number++;
    } else if (/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/.test(char)) {
      special++;
    }
  });
}

// Solution 2: Working

function solve(s) {
  return s.split("").reduce(
    (acc, curr) => {
      if (/[A-Z]/.test(curr)) {
        acc[0] = acc[0] + 1;
      }
      if (/[a-z]/.test(curr)) {
        acc[1] = acc[1] + 1;
      }
      if (/[\d]/.test(curr)) {
        acc[2] = acc[2] + 1;
      }
      if (/[^a-zA-Z0-9]/.test(curr)) {
        acc[3] = acc[3] + 1;
      }
      return acc;
    },
    [0, 0, 0, 0]
  );
}
