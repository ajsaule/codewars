// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

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

// other approach using less low level code here

function duplicateEncodeV2(word) {
  let wordArr = word.toLowerCase().split("");
  let tempArr = [];
  let letterCollection = [];
  wordArr.forEach((letter) => tempArr.push(wordArr.indexOf(letter)));
  tempArr.forEach((index) => {
    if (!letterCollection.indexOf(index)) letterCollection.push(index);
  });
  return letterCollection;
}

duplicateEncodeV2("hello");

// below is close but does not handle every second repetitive letter e.g. repetitive - will not pickup the dupes
function duplicateEncodeV3(word) {
  let letters = word.toLowerCase().split("");
  let temp = [];
  let duplicates = [];
  let last = [];
  // create index of duplicates
  letters.forEach((letter, index) => {
    temp.push(letters.indexOf(letter));
    if (temp.indexOf(index) == -1) duplicates.push(letter);
  });
  // create string of symbols
  letters.forEach((letter) => {
    if (letter.indexOf(duplicates)) {
      last.push(")");
    } else {
      last.push("(");
    }
  });
  return last.join("");
}

duplicateEncodeV3("hello");

// ! working solution..
// below can handle strictly duplicates and > 2 scenarios
function duplicateEncode(word) {
  let letters = word.toLowerCase().split("");
  let temp = [];
  let multiples = [];
  let onlyDupes = [];
  let last = [];

  // create index of duplicates
  letters.forEach((letter, index) => {
    temp.push(letters.indexOf(letter));
    if (temp.indexOf(index) == -1) multiples.push(letter); // but isn't -1 not index
  });

  // if need to clear out > duplicates
  //   multiples.forEach((letter, index) => {
  //     if (!multiples.indexOf(letter)) onlyDupes.push(letter)
  //   })

  // create string of symbols
  letters.forEach((letter) => {
    if (multiples.indexOf(letter) >= 0) {
      last.push(")");
    } else {
      last.push("(");
    }
  });
  return last.join("");
}
