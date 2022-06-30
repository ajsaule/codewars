// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript

function rot13(str) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return str
    .toLowerCase()
    .split("")
    .map((char, idx) => {
      if (alphabet[char]) {
        let letterPosition = alphabet[char];
        if (str[idx] === str[idx].toUpperCase()) {
          return char.replace(
            char,
            alphabetArr[
              letterPosition > 13
                ? letterPosition + 12 - 26
                : letterPosition + 12
            ].toUpperCase()
          );
        } else {
          return char.replace(
            char,
            alphabetArr[
              letterPosition > 13
                ? letterPosition + 12 - 26
                : letterPosition + 12
            ]
          );
        }
      } else {
        return char;
      }
    })
    .join("");
}

// Alternate solutions..

// 1)

function rot13(str) {
  return str.replace(/[a-z]/gi, function (x) {
    return String.fromCharCode(
      x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13)
    );
  });
}

// 2)

function rot13(str) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return str.replace(/[a-z]/gi, (c) => a[b.indexOf(c)]);
}

// 3)
