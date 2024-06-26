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

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  return str.split(" ").slice(0, wordLimit).join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);

// removeArrayElement("money") returns the array without the money object
// removeArrayElement("id") returns the array without the id object
// removeArrayElement("cStatus") returns the array without the cStatus object

const array = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  // write your solution here
  let result = array.filter(function (obj) {
    return obj.field !== filterField;
  });
  return result;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

let plusOne = function (digits) {
  let result = [];
  let str = "";

  for (let i = 0; i < digits.length; i++) {
    str += digits[i];
  }

  let incrementNumber = str * 1 + 1;

  result = incrementNumber
    .toString()
    .split("")
    .map((i) => Number(i));

  // final Array
  return result;
};

console.log(plusOne(digits));

function getMiddle(s) {
  if (s.length % 2 === 0) {
    let middleLength = Math.round(s.length / 2);
    return s.charAt(middleLength) + s.charAt(middleLength - 1);
  } else {
    let midLength = s.length / 2;
    return s.charAt(midLength);
  }
}

getMiddle("middle");

// Sort an Array without using any built-in functions
let sortArray = function (nums) {
  let swapp;
  do {
    swapp = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapp = true;
      }
    }
  } while (swapp);
  return nums;
};

console.log(sortArray([5, 9, 2, -1, 3, -126]));
