const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('works for a single word string', () => {
    assert.deepEqual(letterPositions("hi"), {h:[0], i:[1]});
  });
  it('works on numbers', () => {
    assert.deepEqual(letterPositions('12345'), {1:[0], 2:[1], 3:[2], 4:[3], 5:[4]});
  });
});