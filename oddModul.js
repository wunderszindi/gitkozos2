let oddModul = (arr) => {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      num = num * arr[i];
    }
  }
  return num;
};

module.exports = { oddModul };
