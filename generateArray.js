let randomNum = () => {
  let num = Math.floor(Math.random() * (100 - 0)) - 0;
  return num;
};

let generatearray = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(randomNum());
  } return arr;
};

module.exports = {
  randomNum,
  generatearray
};
