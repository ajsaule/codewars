// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript

function hero(bullets, dragons) {
  let bulletsNeeded = dragons * 2;

  if (bullets >= bulletsNeeded) {
    return true;
  }

  return false;
}

// shorter solution..

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// further refactoring..

const hero = (bullets, dragons) => bullets >= dragons * 2;
