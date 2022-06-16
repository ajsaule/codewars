// https://www.codewars.com/kata/596fba44963025c878000039/train/javascript

function contamination(text, char) {
  let textLength = text.length;
  return text.replace(text, char.repeat(textLength));
}

// shorter solution..

function contamination(text, char) {
  return char.repeat(text.length);
}
