const add = function (num) {
  return num + this.value;
};

const values = [1, 2, 3];
const obj = { value: 10 };

const modifiedValues = values.map(add, obj);
// modifiedValues: [11, 12, 13]
