// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

//*-*~*~*~*~*~ Not finished *~*~*~*~*~*~*~*~*~*~//

function bouncingBalls(h, b, w) {
  let height = h;
  let deduct = 0;
  let bounces = 1;
  if (h > 0 && b > 0 && b < 1 && w < h) {
    while (height > w) {
      deduct = h * b;
      height -= deduct;
      bounces++;
      bounces++;
    }
    return bounces;
  }
  return -1;
}
