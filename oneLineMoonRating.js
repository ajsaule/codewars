// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5". Input is always valid.

// Write function moonRating which returns valid rating represented as moons ('o','c','x') in single string. You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

moonRating=(r,m={'o':2,'c':0.5,'x':0})=>{
    r=~~(r*2)/2;
}

console.log(moonRating(2))


// actual solution, learn this

moonRating=x=>('o'.repeat((x+=.5)>>1)+['c'[~x&1]]).padEnd(5,'x')