// itt kell dolgozni
let generateMethod = require('./generateArray');
let containsMethod = require('./contains');
let evenS = require('./evensum');
let oddM = require('./oddModul');

let init = () => {
  let tomb = generateMethod.generatearray();
  let num = evenS.evenSum(tomb);
  console.log(num);
  let odd = oddM.oddModul(tomb);
  console.log(odd);
  console.log(tomb);
  let szam = generateMethod.randomNum();
  let result = containsMethod.contains(tomb, szam);
  console.log(result);
};

init();
