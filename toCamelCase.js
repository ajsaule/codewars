const string = "hello-world_lets-go";

console.log(
  string
    .split(/-|_/g)
    .map((wrd) =>
      wrd.charAt(0) !== wrd.charAt(0).toUpperCase()
        ? wrd.charAt(0).toUpperCase() + wrd.slice(1, wrd.length)
        : wrd
    )
);

const toCamelCase = (str) =>
  str
    .split(/-|_/g)
    .map((wrd) => wrd.charAt(0).toUpperCase() + wrd.slice(1, wrd.length))
    .join("");

console.log(toCamelCase(string));

// Working solution..

const toCamelCase = (str) =>
  str
    .split(/-|_/g)
    .map((wrd, idx) =>
      idx === 0 ? wrd : wrd.charAt(0).toUpperCase() + wrd.slice(1, wrd.length)
    )
    .join("");
