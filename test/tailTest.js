const { expect } = require('chai');
const tail = require('../tail');

describe('#tail', () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).deep.to.equal(["Lighthouse", "Labs"]);
  });

  it('returns [2, 3] for [1, 2, 3]', () => {
    expect(tail([1, 2, 3])).deep.to.equal([2, 3]);
  });

});
