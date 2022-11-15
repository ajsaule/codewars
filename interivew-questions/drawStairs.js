// Debug the following function to fix the incremental stepping up of the stairs 

function drawStairs(n) {
  let finalString = '';
  
  for (let i = 0; i < n; i++) {
    if (n === 0) {
      return "I";
    } else {
      finalString += " ".repeat(i) + `${i === n ? "I" : "I\n"}`;
    }
  }
  
  return finalString
}

// Solution 

function drawStairs(n) {
  let finalString = '';
  
  for (let i = 1; i < n; i++) {
    if (n === 0) {
      return "I";
    } else if (i === 1) { 
      finalString += 'I\n'
    } else {
      finalString += " ".repeat(i) + `${i === n ? "I" : "I\n"}`;
    }
  }
  
  return finalString
}