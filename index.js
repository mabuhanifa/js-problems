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
  return arr.flat(Infinity);
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
