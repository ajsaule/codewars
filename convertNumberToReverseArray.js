// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

const digitize = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((i) => parseInt(i));

const digitize = (x) => {
  x = `${x}`.split("").reverse();
  let a = [];
  for (let i = 0; i < x.length; i++) {
    a.push(+x[i]);
  }
  return a;
};
