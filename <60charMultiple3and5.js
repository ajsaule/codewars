// Your goal is to find and return an array representing the number of unique multiples of three, five and both three and five (in that order) below n. To clarify, for example, 6 is a multiple of three; 20 is a multiple of five. 30, however, is a multiple of both three and five, so it gets counted as its own separate category, and the totals for three, and five, separately, do not increase.

// Examples:

// threesAndFives(6) => [1, 1, 0];
// threesAndFives(87) => [23, 12, 5];
// threesAndFives(444) => [118, 59, 29];

// first tests with just a long written out case and an extra variable to count down 

// threesAndFives=(n,x=1,y=[0,0,0])=> { 
//     while (x<n) { 
//         if (x % 3 == 0) y[0]++
//         if (x % 5 == 0) y[1]++
//         if (x % 3 == 0 && x % 5 == 0) y[2]++
//         x++
//     }
//     return y
// }

// ??? Perplexed is I who stares at this problem. 
// how to condense this from 170chars to <61 .. ? 

// I think the problem lays in simlifying the 3 conditional statements into one somehow? Loop and dynamically change the numbers in the condition and incrementor? 
  
threesAndFives=(n,y=[0,0,0])=> { 
    while (0<n) { 
        if (n % 3 == 0 && n % 5 == 0) {
            y[2]++
        } else {
            if (n % 3 == 0) y[0]++
            if (n % 5 == 0) y[1]++
        } 
        n--
    }
    return y
}


