// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// 51496 ==> 51649

// TO find the LARGEST, not next largest 
// function nextBigger(n) {
//     return String(n).split('').sort().reverse().join('');
// }

function nextBigger(n) {
    let digits = n.toString().split('')

    let temp = -1
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] > digits[i - 1]) {
            temp = i - 1
            break
        }
    }
    // if there is no number that can be extracted into a section to be split, sorted and joined back, return - 1
    if (temp === -1) return temp
    // splicng digits out from the right section to be sorted and tested
    let right = digits.splice(temp)
    console.log(right)
    // extracting the desired integer that we need to re-map to the back of the integer
    let desInt = right.splice(0, 1)[0]
    console.log(desInt)
    // now need to find lowest number greater than the leading digit for the right section 
    let x = null, xi = null
    for (let i = 0; i < right.length; i++) {
        if (right[i] > desInt) {
            if (x === null || right[i] < x) {
                x = right[i]
                xi = i
            }
        }
    }
    
    if (xi === null) return -1;
    right.splice(xi, 1)
    right.push(desInt)
    right = right.sort()

    // now finally concat the left, middle sect and right 
    let final = digits.concat([x]).concat(right).join('')
    if (final < n) return -1

    return Number(final)
}


console.log(nextBigger(21581957621))