const { log } = console;

function findTarget(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

function findTarget(target, array) {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[array[i]] = i;
  }

  return null;
}

const stringToNum = (str) => {
  return str
    .split("")
    .filter((s) => !isNaN(s))
    .map((num) => Number(num))
    .reduce((a, c) => c + a, 0);
};

const flat = (arr) => {
  let a = arr.flat(Infinity);
  let l = a.length;
  let b = 0;
  for (let i = 0; i < l; i++) {
    if (Boolean(a[i])) {
      b++;
    }
  }
  return b;
};

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

log(recursiveFactorial(10));

const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

function test_prime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(test_prime(37));

function countWords(str) {
  let count = 0;
  let isWord = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (!isWord) {
        count++;
        isWord = true;
      }
    } else {
      isWord = false;
    }
  }

  return count;
}
// Truncate a string to a certain number of words
// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  return str.split(" ").slice(0, wordLimit).join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
