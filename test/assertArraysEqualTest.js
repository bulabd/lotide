const assertArraysEqual = require('../assertArraysEqual');
const { assert } = require('chai');

describe('#assertArraysEqual', () => {

  it('returns true for [1,2,3], [1,2,3]', () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
  });

  it('returns true for ["Lighthouse", "Labs"], ["Lighthouse", "Labs"]', () => {
    assert.strictEqual(assertArraysEqual(["Lighthouse", "Labs"], ["Lighthouse", "Labs"]), true);
  });

});