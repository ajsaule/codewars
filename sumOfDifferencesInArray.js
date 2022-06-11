// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

function sumOfDifferences(arr) {
  let descArr = arr.sort((a, b) => a - b);

  let sum = 0;
  if (descArr.length && descArr.length !== 1) {
    for (let i = 0; i < descArr.length - 1; i++) {
      sum += descArr[i] - descArr[i + 1];
    }
    return Math.abs(sum);
  } else {
    return 0;
  }
}
