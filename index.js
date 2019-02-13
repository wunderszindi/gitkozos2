// itt kell dolgozni
let arr = require('./generateArray');
let evenS = require('./evensum');
let oddM = require('./oddModul');

let init = () => {
  let tomb = arr.generatearray();
  let num = evenS.evenSum(tomb);
  console.log(num)
  let odd = oddM.oddModul(tomb);
  console.log(odd)
};


init();
