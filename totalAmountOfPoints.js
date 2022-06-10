// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let points = 0;

  games.forEach((game) => {
    let scores = game.split(":");
    if (scores[0] > scores[1]) {
      points += 3;
    } else if (scores[0] < scores[1]) {
      points += 0;
    } else if ((scores[0] = scores[1])) {
      points += 1;
    }
  });

  return points;
}
