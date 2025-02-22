function findT(a, t) {
  const db = {};
  for (const [i, e] of a.entries()) {
    const diff = t - e;
    if (db[diff]) {
      return [db[diff], i];
    }
    db[e] = i;
  }
  return null;
}

// console.log(findT([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

function leapY(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? true : false;
}

// console.log(leapY(1996));

const numString = "7qj1h2jn2j3pf54jh6k7m4";

function avgFromString(str) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      sum += Number(str[i]);
      count++;
    }
  }

  return count === 0 ? 0 : sum / count; // Prevent division by zero
}
console.log(avgFromString(numString));
