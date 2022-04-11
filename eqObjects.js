const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const eqObjects = function(object1, object2) {
  let keyArr1 = Object.keys(object1);
  let keyArr2 = Object.keys(object2);
  if (keyArr1.length !== keyArr2.length) {
    return false;
  }
  for (let key of keyArr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// assertEqual(eqObjects(ab, ba), true);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

// console.log(eqObjects(cd, cd2)); // => false
// console.log(eqArrays(cd["d"], cd2["d"])); // => false

module.exports = eqObjects;