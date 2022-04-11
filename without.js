const eqArrays = function(actual, expected) {
  let truthCounter = 0;
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        truthCounter++;
      }
    }
  }
  if (truthCounter === actual.length && truthCounter === expected.length) {
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

const without = function(original, erase) {
  let newArr = [];
  for (let i = 0; i < original.length; i++) {
    newArr.push(original[i]);
    if (Array.isArray(erase)) {
      for (let j = 0; j < erase.length; j++) {
        if (erase[j] === original[i]) {
          newArr.pop();
        }
      }
    } else {
      if (erase === original[i]) {
        newArr.pop();
      }
    }
  }
  return newArr;
};


// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => Assertion Passed...

// console.log(without([1,2,3], 1)); // => [2, 3]
// console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ['1', '2']

module.exports = without;