// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num) {
  let sheep = "";

  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }

  return sheep;
};

// study this solution...

countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;
