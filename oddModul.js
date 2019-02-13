let arr = [1, 2, 5, 4, 5];

let oddModul = (arr) => {
  let num = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      num = num * arr[i];
    }
  }
  return num;
};

console.log(oddModul(arr));
