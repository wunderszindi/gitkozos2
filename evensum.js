let myMethod = require('./generateArray');
let arr = myMethod.generatearray();

let evenSum = (arr) => {
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

console.log(evenSum(arr));