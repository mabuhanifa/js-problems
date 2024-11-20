/* function(a,b,c) -> transformed to function(a)(b)(c) */
function add(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = add(5);
const result = add5(3);
