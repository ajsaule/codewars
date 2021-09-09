// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let final = [];
  let descNums = numbers.split(" ").sort((a, b) => b - a);
  final.push(descNums[0]);
  final.push(descNums[descNums.length - 1]);
  return final.join(" ");
}
