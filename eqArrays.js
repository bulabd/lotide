const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));