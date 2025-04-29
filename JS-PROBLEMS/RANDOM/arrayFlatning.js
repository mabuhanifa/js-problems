const arr = [[1, 2], 2, 3, [3, 4, [5, 4, [9, 8, [6, 4], 4, 4]]], 4, [5, 6]];

const flatten = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const infiniteFlatten = arr.flat(Infinity);

console.log(flatten(arr));
