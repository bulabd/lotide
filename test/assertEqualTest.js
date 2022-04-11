const { assert } = require('chai');
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {

  it('returns true for 1, 1', () => {
    assert.strictEqual(assertEqual(1, 1), true);
  });

  it('returns false for "Lighthouse Labs", "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

});