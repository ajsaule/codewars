// https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript

function multipleOfIndex(array) {
  let finalArr = [];

  array.forEach((el, idx) => {
    if (el % idx === 0) {
      finalArr.push(el);
    }
  });

  return finalArr;
}

// shorter solution for

const multipleOfIndex = (array) => array.filter((el, idx) => el % idx === 0);
