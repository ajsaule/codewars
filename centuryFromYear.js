// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  let yearString = year.toString();
  if (year < 101) {
    return 1;
  } else if (year < 1001) {
    return Number(yearString.toString().slice(0, 1));
  } else if (year <= 10001) {
    let decimalYear =
      yearString.substring(0, 2) +
      "." +
      yearString.substring(2, yearString.length);
    return Number(Math.ceil(Number(decimalYear)).toString().slice(0, 2));
  } else if (year <= 100001) {
    let decimalYear =
      yearString.substring(0, 3) +
      "." +
      yearString.substring(3, yearString.length);
    return Number(Math.ceil(Number(decimalYear)).toString().slice(0, 4));
  } else if (year <= 1000001) {
    let decimalYear =
      yearString.substring(0, 4) +
      "." +
      yearString.substring(4, yearString.length);
    return Number(Math.ceil(Number(decimalYear)).toString().slice(0, 4));
  }
}

// simpler solution..

const century = (year) => Math.ceil(year / 100);
