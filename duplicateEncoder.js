// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

//*-*~*~*~*~*~ Not finished *~*~*~*~*~*~*~*~*~*~//

function duplicateEncode(word) {
  const wArr = word.toLowerCase().split("");
  let finalArr = [];
  let tempArr = [];
  let letterCount = 0;
  wArr.forEach((l) =>
    wArr.forEach((c, idx) => {
      if (l === c) {
        tempArr.push(1);
      } else {
        tempArr.push(0);
        // console.log(tempArr)
      }
      if ((idx % wArr.length) - 1) {
        tempArr.forEach((l) => (letterCount = +l));
        finalArr.push(letterCount);
        tempArr = [];
      }
    })
  );
  // if ()
  return finalArr;
}
duplicateEncode("hello");
