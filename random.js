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

console.log(leapY(1996));
