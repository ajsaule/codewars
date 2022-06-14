// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036/train/javascript

const isLastArrayItem = (arr, idx) => idx === arr.length - 1;
const isNotLastArray = (array, index) => index !== array.length - 1;

function toCsvText(array) {
  let finalStr = "";

  array.forEach((arr, index) => {
    arr.forEach((num, idx) => {
      finalStr = finalStr + `${num}${isLastArrayItem(arr, idx) ? "" : ","}`;
      if (isLastArrayItem(arr, idx) && isNotLastArray(array, index)) {
        finalStr = finalStr + "\n";
      }
    });
  });

  return finalStr;
}

// simpler soltution..

function toCsvText(array) {
  return array.join("\n");
}
