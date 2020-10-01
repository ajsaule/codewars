// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// function solve(s) {
//     let numsArr = []
//     let sArr = s.split("").filter(el => ((/[0-9]/).test(el) && ![]) ? numsArr.push(el) : )//el.match(/0-9/) ? el : 9)
    
//     console.log(sArr)
// };

// solve('gh12cdy695m1')

// testing a sort on myArr 
// let myArr = [1, 2, 3, 4, 5]

// console.log(myArr.sort((a, b) => a - b))

// SOLUTION #2 working solution.

function solve(s) {    
    return sArr = s
        .replace(/[a-zA-Z]/g, '-')
        .split("-")
        .map(el =>
            /[0-9]/.test(el)
                ? Number(el)
                : []
        )
        .sort((a, b) => b - a)[0]
};

console.log(solve('vih61w8o1255ohj5'))


// SOLUTION #3 using regex, spread operator and Math.max()

function solve(s){
    return Math.max(...s.match(/\d+/g));
};


