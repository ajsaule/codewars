// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {

    // s.split("").forEach(char => {
    //  tempChar !== char.toLowerCase() 
   //      ? char
     //    : ''
    // tempChar = char.toLowerCase()
  //   })
   // return Array.from(new Set(s.split(''))).toString()
   
    // let strArr = s.split('')
    
    // strArr.forEach(char => {
    //    if (s.indexOf(char) < 0)
    //        return char
    // });

    let scanArr = s.split('')

    scanArr.forEach(char => {
        scanArr.forEach(scan => {
            if (char === scan) 
        })
    })

}

console.log(firstNonRepeatingLetter('stress'))