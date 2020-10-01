// Task
// Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {  
    return str.replace(/[^A-Za-z]/g, '').split('').reverse().join('')
}

function reverseLetter(str, finalStr = '') {  
    for (let i = str.length - 1; i >= 0; i--) {
        if (/[A-Za-z]/.test(str[i])) {
            console.log(str[i])
            finalStr += str[i]
        }
    }
    return finalStr
}

function reverseLetter(str, tempArr = []) {  
    let strArr = str.split('')
    tempArr = strArr.map(elm =>
        /[A-Za-z]/.test(elm)
            ? elm
            : []
    )
    return  tempArr.reverse().join('')
}

console.log(reverseLetter("ultr53o?n")) 
