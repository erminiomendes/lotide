// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual.js');

// TEST CODE
// assertArraysEqual(middle([1,2,3,4,5]), [3]);
// assertArraysEqual(middle(["one", "two", "three", "four"]), ["two", "three"]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  });
});

it("returns [3, 4]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
});