// WORKING SOLUTION:: Woot
// can probably refactor this to reduce amount of code overall 

function longestRepetition(str) {
    if (str === '') {
        return ["", 0]
    }
    // first splitting the test string into an array 
    let strArr = str.split("")
    let tempChar = ''
    let tempCount = 1 
    let longestConsecutive = ['test', 0]

    strArr.forEach(char => {
        if (char === tempChar) {
            tempCount++
        } else {
            tempCount = 1
        }
        if (tempCount > longestConsecutive[1]) {
            if (tempChar === '') {
              longestConsecutive = [char, tempCount]
            } else {
              longestConsecutive = [tempChar, tempCount]
            }
        } 
        tempChar = char
    })

    return longestConsecutive
}

console.log(longestRepetition('bbbaaabaaaa'))
