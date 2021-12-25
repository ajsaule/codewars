// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

const friend = (friends) => {
  let names = [];
  friends.forEach((name) => (name.length === 4 ? names.push(name) : null));
  return names;
};

// Better solutions

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}
