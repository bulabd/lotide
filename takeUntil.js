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

const takeUntil = function(array, callback) {
  let finalArr = [];
  for (let elem of array) {
    if (callback(elem)) {
      return finalArr;
    }
    finalArr.push(elem);
  }
  return finalArr;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(takeUntil(data1, x => x < 0), [1,2,5,7,2]);

// assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

// const data3 = [undefined, null, '', 0];
// const results3 = takeUntil(data3, x => x === '');
// console.log(results3);

module.exports = takeUntil;