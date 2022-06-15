// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
  let finalArr = [];

  arr1.forEach((numOne, idx) => {
    finalArr.push(numOne + arr2[idx]);
  });

  return finalArr.reduce(function (total, num) {
    return total + num;
  }, 0);
}

// shorter solution, study this...

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// ^ While not a bad answer, keep in mind that an error will be thrown if both arr1 and arr2 are empty because you're doing reduce on an empty sequence without an initial value. To avoid this, simply provide a seed (such as 0) as the second argument to reduce.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);
}
