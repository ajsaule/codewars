var str = 'aaabbbcccaa'
var uniqArr = ['a', 'b', 'c']
var strArr = str.split("")

var newObj = {}

var maxArr = [1, 2, 3, 4, 5, 6]

//console.log(Math.max(...maxArr))

var objArrPos = 0
uniqArr.forEach(uniqLetter => {
    newObj[uniqLetter] = []
    newObj[uniqLetter].push(0)
    objArrPos = 0
    strArr.forEach(strLetter => {
        if (uniqLetter === strLetter) {
            newObj[uniqLetter][objArrPos] += 1
        } else if (newObj[uniqLetter][objArrPos] !== 0) {
            objArrPos++
            newObj[uniqLetter].push(0)
        }   
    })
    newObj[uniqLetter] = Math.max(...newObj[uniqLetter])
})

let maxChar = ''
let maxNum = ''
for (let letter in newObj) {
    if (newObj[letter] > maxNum) {
        maxChar = letter
        maxNum = newObj[letter]
    }
}

console.log([maxChar, maxNum])

// let maxNum = ''
// let maxChar = ''
// for (let char in uniqChars) {
//     if (uniqChars[char] > maxNum) {
//         maxNum = uniqChars[char]
//         maxChar = char
//     }
// }


console.log(newObj['a'][0] + 1)

console.log(newObj)

var testArr = [0, 1]
