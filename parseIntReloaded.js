function parseInt(string) {
    let tempSum = 0
    let finalSum = 0
    let lookupObj = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9, 
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "hundred": 100,
        "thousand": 1000,
        "million": 1000000,
    }
    // first split the string into array items 
    stringArray = string.split(/[-\ ]/g)
    // loop through those array items, incrementing them as they match the corresponding key/value pair 
    stringArray.forEach(strNum => {
        // first test case (13-19) endsWith "een" + 10
        if (strNum === "and") { 
            delete strNum
        } else if (strNum.endsWith("een")) {
            let eenRegex = new RegExp(strNum.slice(0, 2))
            console.log(eenRegex);
            for (let key in lookupObj) {
                if (eenRegex.test(key)) {
                    tempSum += lookupObj[key] + 10
                    break
                }
            }
        // second case (20-90) endsWith "ty" + "0"
        } else if (strNum.endsWith("ty")) {
            let tyRegex = new RegExp(strNum.slice(0, 2))
            for (let key in lookupObj) {
                if (tyRegex.test(key)) {
                    tempSum += lookupObj[key] * 10
                    break
                }
            }
        } else if (strNum === "hundred") {
            tempSum = tempSum * lookupObj[strNum]
        } else if (strNum === "thousand" || strNum === "million") {
            tempSum = tempSum * lookupObj[strNum]
            finalSum += tempSum
            tempSum = 0
        } else {
            tempSum += lookupObj[strNum]
        }
        console.log(tempSum)
        console.log(finalSum)
    })
    finalSum += tempSum

    // 13-19 test the start (e.g. thr = three) && endIn (een) + 10  
    // 20-90 test first two chars (e.g. two - 2) && endIn (ty) + "0"
    // 100-900 test first two chars (e.g. fi = five) && + "00" if contains 'hundred'
    return finalSum
}

console.log(parseInt('five million three hundred thousand fifty three'))

// fifty-five thousand five thousand and thirty four
// 50 + 5 + "000" + 5 "000" + 3  + 4

// "seven hundred eighty-three thousand nine hundred and nineteen" 
// 7 + "00" + 8 + "0" + 3 + "000" + 9 + "00" + 9 + 10
// 783919

// Order should effectively not matter since we are convering all numbers back to integers and just adding their number equivalants together.. 
// =>  783919
    
// issue with zeroBased nums, we want to actually construct all the zero based on their own, first make the number and store it in Lookup.
// then once the number has been constructed 
    
let newNum = 50 + 5 + "000"

console.log(typeof (50+5+"000"))