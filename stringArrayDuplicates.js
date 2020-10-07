// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

function dup(s) {
    let newArr = []
    let tempChar = ''
    s.forEach((str, indx) => {
            newArr = str.split('').forEach(el => console.log(el))
            // .map(char => {
            //     char === tempChar 
            //     ? delete char 
            //     : char
            //     tempChar = char
            // })
            tempChar = ''
        
    })
    console.log(newArr)
    return tempChar
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]))