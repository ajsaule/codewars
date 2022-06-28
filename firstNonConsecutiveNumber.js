// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive(arr) {
  let prevNum = arr[0] - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prevNum + 1) {
      return arr[i];
    }
    prevNum = arr[i];
  }
  return null;
}

// refactored slightly..

const firstNonConsecutive = (arr) => {
  let prevNum = arr[0] - 1;
  let nonConsecutive = arr.forEach((num) => {
    if (num !== prevNum + 1) {
      return num;
    }
  });
  if (nonConsecutive) return nonConsecutive;
  else return null;
};
