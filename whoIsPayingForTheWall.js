// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

function whoIsPaying(name, finalName = []) {
  if (name.length > 2) {
    finalName.push(name, name.slice(0, 2));
    return finalName;
  } else {
    finalName.push(name);
    return finalName;
  }
}

// alternate solutions..

function whoIsPaying(name) {
  return name.length > 2 ? [name, name.substr(0, 2)] : [name];
}

const whoIsPaying = (name) => [...new Set([name, name.slice(0, 2)])];
