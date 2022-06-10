// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// Unfinished question...

function warnTheSheep(queue) {
  queue.forEach((i, idx) => {
    if (i === "wolf") {
      console.log("test123");
      return `Oi! Sheep number ${
        idx + 1
      }! You are about to be eaten by a wolf!`;
    }
    if (i === "wolf" && idx === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    }
  });
}
