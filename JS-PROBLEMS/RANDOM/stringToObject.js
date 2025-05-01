const str = "abcde";
const strToObj = (str) => {
  const strArr = str.split("");
  //   return strArr.reduce((acc, curr) => {
  //     return { [curr]: acc };
  //   });

  let result = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    temp = {};
    temp[strArr[i]] = result;
    result = temp;
  }
  return result;
};

console.log(strToObj(str));
