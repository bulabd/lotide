const middle = function(array) {
  let resultArr = [];
  if (array.length > 2 && array.length % 2 !== 0) {
    resultArr.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    resultArr.push(array[array.length / 2] - 1, array[array.length / 2]);
  }
  return resultArr;
};

module.exports = middle;
