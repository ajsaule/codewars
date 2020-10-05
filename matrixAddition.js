// Write a function that accepts two square matrices (N x N two dimensional arrays), and return the sum of the two. Both matrices being passed into the function will be of size N x N (square), containing only integers.

// How to sum two matrices:

// Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

// Visualization:

// |1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
// |3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
// |1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|

let arrA = [ [1, 2, 3],
             [3, 2, 1],
             [1, 1, 1] ]

let arrB = [ [2, 2, 1],
             [3, 2, 3],
             [1, 1, 3] ] 

let arrC = [ [1, 2],
             [1, 2] ]

let arrD = [ [2, 3],
             [2, 3]] 
             
// use one variable for x axis of the matrix
// use another variable for y axis 
// calculate the length of one of the x axis arrays and square that 
// use this caluclated length to set the loop to run that many times 
// increment the y variable each time the loop runs and reset it when it is divisible by the length of an inner array 
// + 1 to the x variable when appropriate
// access array items and push results into final arr to be returned 
 
function matrixAddition(a, b) {
    let final = []
    let matrixSize = a[0].length
    let maxLoop = matrixSize * matrixSize
    let y = 0
    let x = 0
    for (let i = 0; i < maxLoop; i++, y++) {
        if (i % matrixSize === 0) {
            final.push([])
            y = 0
            if (i !== 0) {
                x += 1
            }
        }
        final[x].push(a[x][y]+b[x][y])
    }
    return final
}


matrixAddition(arrC, arrD) 

// recursive version

function matrixAddition(x, y){
    return x.map(function(h, i){
      return h.map(function(v, j){
        return v + y[i][j];
      });
    });
}
  
console.log(matrixAddition(arrC, arrD))