// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

const invert = (arr) => arr.map((i) => (i < 0 ? Math.abs(i) : -i));

// alternate solution...

const invert = (array) => array.map((num) => -num);
