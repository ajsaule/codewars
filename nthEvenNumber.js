// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  let i = 0;
  let evenNums = [];
  while (evenNums.length !== n) {
    if (i % 2 === 0) {
      evenNums.push(i);
    }
    i++;
  }
  return evenNums[evenNums.length - 1];
}
