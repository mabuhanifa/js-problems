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

log(findTarget(9, [2, 7, 11, 15]));
