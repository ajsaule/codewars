// https://www.codewars.com/kata/591588d49f4056e13f000001/train/javascript

function HQ9(code) {
  if (code === "H") {
    return "Hello World!";
  }
  if (code === "Q") {
    return code;
  }
  if (code === "9") {
    let string = "";
    for (let i = 99; i !== 0; i--) {
      string =
        string +
        `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down pass it around, ${
          i - 1
        } bottles of beer on the wall.\n`;
      if (i === 1) {
        string =
          string +
          "Take one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
      }
    }
    return string;
  }
}
