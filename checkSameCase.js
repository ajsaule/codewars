// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

const checkUpperCasing = (a, b) =>
  a.toUpperCase() === a && b.toUpperCase() === b;
const checkLowerCasing = (a, b) =>
  a.toLowerCase() === a && b.toLowerCase() === b;
const checkIfCharacter = (a, b) => a.match(/[a-z]/i) && b.match(/[a-z]/i);

function sameCase(a, b) {
  if (checkIfCharacter(a, b) && checkUpperCasing(a, b)) {
    return 1;
  } else if (checkIfCharacter(a, b) && checkLowerCasing(a, b)) {
    return 1;
  } else if (checkIfCharacter(a, b)) {
    return 0;
  } else {
    return -1;
  }
}

// Slightly shorter refactor

function sameCase(a, b) {
  if (
    checkIfCharacter(a, b) &&
    (checkUpperCasing(a, b) || checkLowerCasing(a, b))
  ) {
    return 1;
  } else if (checkIfCharacter(a, b)) {
    return 0;
  } else {
    return -1;
  }
}

// Ternary refactor

const sameCase = (a, b) =>
  checkIfCharacter(a, b) && (checkUpperCasing(a, b) || checkLowerCasing(a, b))
    ? 1
    : checkIfCharacter(a, b)
    ? 0
    : -1;
