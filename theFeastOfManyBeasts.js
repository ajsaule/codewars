// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
  let beastArr = beast.split("");
  let firstLetter = beastArr[0];
  let lastLetter = beastArr[beastArr.length - 1];

  if (dish.startsWith(firstLetter) && dish.endsWith(lastLetter)) {
    return true;
  }

  return false;
}
