const flatten = function(array) {
  let newArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      const result = flatten(element);
      result.forEach(element => newArr.push(element));
    } else {
      newArr.push(element);
    }
  }
  return newArr;
};

// console.log(flatten([1, 2, [3, 4], 5, [6]]));
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;