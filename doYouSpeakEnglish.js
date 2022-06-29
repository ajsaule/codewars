// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

function spEng(sentence) {
  return sentence.toLowerCase().includes("english");
}

// other solution..

function spEng(s) {
  return /english/i.test(s);
}
