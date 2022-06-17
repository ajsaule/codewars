// https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript

var replaceDots = function (str) {
  return str
    .split("")
    .map((char) => (char === "." ? "-" : char))
    .join("");
};

// shorter solution

var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};
