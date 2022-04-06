const eqArrays = function(actual, expected) {
  let truthCounter = 0;
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      truthCounter++;
    }
  }
  if (truthCounter === actual.length) {
    return true;
  }
  return false;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else if (!(eqArrays(actual, expected))) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let resultArr = [];
  if (array.length > 2 && array.length % 2 !== 0) {
    resultArr.push(array[Math.floor(array.length / 2)]);
  } else if (array.length > 2 && array.length % 2 === 0) {
    resultArr.push(array[array.length / 2] - 1, array[array.length / 2]);
  }
  return resultArr;
};

assertArraysEqual(middle([1]), []);