//  example strucuture for solution
//  unqiChars = [
//     { a: [2, 4, 5, 0] },
//     { 8: [2, 4, 5, 0] },
//     { 8: [2, 4, 5, 0] } 
//  ]

// uniqChars.push({}) - objects into array, ---> maybe interpolate ? uniqChars.push(`{${charKey}: [] }`) will this work?? 
// access object by uniqChars[i][assignCharKey] = [] 
// then 

// to access the inner data from the array of objects
// 
// uniqChars[i][char] = Math.max(uniqChars[i][char][j]) - getting the maximum output and reassign this to the object value 


function longestRepetition(str, uniqChars = []) {
    // catch condition if str is empty 
    if (str === '') {
        return ["", 0]
    }
    // creating array out of our string
    let strArr = str.split("")
    let objArrPos = 0

    str
        .split("")
        .filter((v, i, a) => a.indexOf(v) === i)
        .forEach((uniqLetter, indx) => {
            uniqChars.push({})
            uniqChars[indx][uniqLetter] = []
            uniqChars[indx][uniqLetter].push(0)
            objArrPos = 0
            console.log(uniqChars)
            // uniqChars[uniqLetter] = []
            // uniqChars[uniqLetter].push(0)
            // objArrPos = 0
            strArr.forEach(strLetter => {
                if (uniqLetter === strLetter) {
                    console.log(uniqChars[indx][uniqLetter][objArrPos])
                    uniqChars[indx][uniqLetter][objArrPos] += 1 
                    console.log(uniqChars)
                } else if (uniqChars[indx][uniqLetter][objArrPos] !== 0) {
                    objArrPos++
                    uniqChars[indx][uniqLetter].push(0)
                }   
            })
            uniqChars[indx][uniqLetter] = Math.max(...uniqChars[indx][uniqLetter])
        })
        console.log(uniqChars)
    
    // looping through and getting max property from keys 
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


