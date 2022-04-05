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

assertArraysEqual([1,2,3], [1,2,3]);