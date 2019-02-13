
let contains = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return true;
    }
  }
  return false;
};

console.log(contains(5, 6));