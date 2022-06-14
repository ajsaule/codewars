// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

function defineSuit(card) {
  let suit = card.charAt(card.length - 1);

  if (suit === "♣") {
    return "clubs";
  } else if (suit === "♠") {
    return "spades";
  } else if (suit === "♦") {
    return "diamonds";
  } else if (suit === "♥") {
    return "hearts";
  }
}

// alternate solution...

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}
