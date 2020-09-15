console.log('hello WOrlds')

// let arr1 = [1, 2, 3, 4]
// // let num = arr.reduce((a, b) => a + b)

// function testArr(arr) {
//     return Math.floor(arr.reduce((a, b) => a + b) / arr.length)
// }

// console.log(testArr([1, 1, 1, 1, 1, 1, 1, 2]))


// let newString = 'aaaabbbbcc9'
// console.log(newString.match(/a/g).length)
// let newStrArr = newString.split("")

// var unique = newStrArr.filter((v, i, a) => a.indexOf(v) === i); 
// console.log(unique)

// console.log(newString.match('a'))



// V1 OF SOLUTION: Only gets the total count of repetitions, NOT consecutive

// function longestRepetition(str, uniqChars = {}) {
//     // catch condition if str is empty 
//     if (str === '') {
//         return ["", 0]
//     }
//     // create object out of unique string characters with occurance count as value 
//     str
//         .split("")
//         .filter((v, i, a) => a.indexOf(v) === i)
//         .forEach(elm => {
//             let regex = new RegExp(`${elm}`)
//             uniqChars[elm] = str.match(regex).length
//         })
//     // loop through object and return the value for single chatacter
//     let maxNum = ''
//     let maxChar = ''
//     for (let char in uniqChars) {
//         if (uniqChars[char] > maxNum) {
//             maxNum = uniqChars[char]
//             maxChar = char
//         }
//     }

//     return [maxChar, maxNum]
// }

// console.log(longestRepetition('abbbbb'))


function longestRepetition(str, uniqChars = {}) {
    // catch condition if str is empty 
    if (str === '') {
        return ["", 0]
    }
    let strArr = str.split("")
    let objArrPos = 0
    // chaining on the original string to get unique char from it 
    str = str
        .split("")
        .filter((v, i, a) => a.indexOf(v) === i)
        .forEach(uniqLetter => {
            uniqChars[uniqLetter] = []
            uniqChars[uniqLetter].push(0)
            objArrPos = 0
            // nested loop will use each unique char and loop over the characters in the string
            strArr.forEach(strLetter => {
                if (uniqLetter === strLetter) {
                    // each time there is a matching char it will increment the array
                    uniqChars[uniqLetter][objArrPos] += 1
                    // the statement will skip on elements that are already 0 to minimise the operations needed when the array is spread at the end of the program 
                } else if (uniqChars[uniqLetter][objArrPos] !== 0) {
                    objArrPos++
                    // if there is a non-matching char a new array element of 0 will be created 
                    uniqChars[uniqLetter].push(0)
                }   
            })
            // spreading out the array in each object 
            uniqChars[uniqLetter] = Math.max(...uniqChars[uniqLetter])
        })
        console.log(uniqChars)
    // loop through object and return the value for single chatacter
    let maxNum = ''
    let maxChar = ''
    for (let char in uniqChars) {
        if (uniqChars[char] > maxNum) {
            maxNum = uniqChars[char]
            maxChar = char
        }
    }

    return [maxChar, maxNum]
}

console.log(longestRepetition('hz05p6uqkl4zijznz1cxvdfgqiqkg7yw88epg7j2fj3mi2zrgvf8v5lbwm7nind0ywd0xbi0okofwzeuv19h0hwkpwqrp0d59odl6dd2e0kajb6jidgl9py11imkw76vl197tzd6pjwmukcrbents3agt2pddzdxhpmxmw3ys2qptnlm73zujan1n6p6da32o7eaqixvad50lxb7z3105hn7fctwxrqeqe3nagibll36rpsefi2hoozplse5lezv7xohzj5jigazdbyaqoqn192s4acczsgcp4fdw9pd8w81tlb2thnetohb4dvx2vx1t1z7nuu49skp5xiylf1vjc4ipnb33d8vpw48rg2ggo3i8cjj5tgtuznqm91uen4jxkcqeskvxqdqxzzh6v0dzn296fqvqhsh0zljayozxyva1w5aiduvf2qkd8n8fss3jrwnlw9xwv5wj2qgcy5l618ka04z8swo9pcfw1otsbhbj8hh6zue'))