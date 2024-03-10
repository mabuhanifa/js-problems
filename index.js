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

log(flat([1, 2, [1, 2], 1, 2, 3]));
