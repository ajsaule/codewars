// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript

function drawStairs(n) {
  let finalString = "";

  for (let i = 0; i < n; i++) {
    if (n === 1) {
      return "I";
    } else {
      finalString += " ".repeat(i) + `I${i === n - 1 ? "" : "\n"}`;
    }
  }

  return finalString;
}

// alternate solution

function drawStairs(n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result[i] = `${" ".repeat(i)}I`;
  }

  return result.join("\n");
}

// study this one..

const drawStairs = (n) =>
  [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");
