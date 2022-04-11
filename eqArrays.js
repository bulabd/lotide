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

module.exports = eqArrays;