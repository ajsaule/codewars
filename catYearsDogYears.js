// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else if (humanYears > 2) {
    catYears = 24;
    dogYears = 24;
    for (let i = 2; i < humanYears; i++) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [hy, catYears, dogYears];
};
