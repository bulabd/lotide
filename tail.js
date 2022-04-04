const assertEqual = function(actual, expected) {
  let verifier = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      verifier.push(actual[i]);
    }
  }
  if (verifier.length === expected.length) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else if (verifier.length !== expected.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = Object.assign([], arr);
  newArr.shift();
  return newArr;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
