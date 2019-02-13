let generateMethod = require('./generateArray');
let containsMethod = require('./contains');

let init = () => {
  let arr = generateMethod.generatearray();
  console.log(arr);
  let szam = generateMethod.randomNum();
  let result = containsMethod.contains(arr, szam);
  console.log(result);
};

init()