let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const checkStr = (str) => {
  str = str.toLowerCase();
  return alphabet.every((letter) => str.includes(letter));
};
