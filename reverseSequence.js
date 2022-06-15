// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const reverseSeq = (n) => {
  let finalArr = [];

  for (let i = n; i >= 1; i--) {
    finalArr.push(i);
  }

  return finalArr;
};
