// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
  let finalStr = "";

  for (let i = 1; i <= 10; i++) {
    finalStr =
      finalStr + `${i} * ${number} = ${i * number}${i === 10 ? "" : "\n"}`;
  }

  return finalStr;
}

// learn the following solution..

function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
