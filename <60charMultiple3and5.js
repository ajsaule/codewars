// Your goal is to find and return an array representing the number of unique multiples of three, five and both three and five (in that order) below n. To clarify, for example, 6 is a multiple of three; 20 is a multiple of five. 30, however, is a multiple of both three and five, so it gets counted as its own separate category, and the totals for three, and five, separately, do not increase.

// Examples:

// threesAndFives(6) => [1, 1, 0];
// threesAndFives(87) => [23, 12, 5];
// threesAndFives(444) => [118, 59, 29];

threesAndFives = (n, x = 0, y = []) => { 
    while (x<n) { 
      if (x % 3 == 0 || x % 5 == 0) y.push(n)
      x++
    }
    return y
  }
  