// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write a function which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

function moonRating(rating) {
    let rRound = ~~(rating*2)/2
    let rString = ''
    let moonObj = {
        'o': 2,
        'c': 0.5,
        'x': 0,
    }
    while (rRound > 0) {
        if (rRound - moonObj['o'] >= 0) {
            rRound -= moonObj['o']
            rString += 'o'
        } else if (rRound - moonObj['c'] >= 0) {
            rRound -= moonObj['c']
            rString += 'c'
        } 
    }
    rString += 'x'.repeat(5-rString.length)
    return rString
}

console.log(moonRating(5))
