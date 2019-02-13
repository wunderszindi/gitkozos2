let contains = (arr, b) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === b) {
      return true;
    }
  }
  return false;
};

module.exports = { contains };
