// https://www.codewars.com/kata/59fca81a5712f9fa4700159a/solutions/javascript

function toBinary(n) {
  return Number((n >>> 0).toString(2));
}

// shorter solution

toBinary = (n) => parseInt(n.toString(2));
