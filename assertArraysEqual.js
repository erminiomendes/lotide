
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual,expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} ==== ${expected}`) : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;


 //assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
// assertArraysEqual(eqArrays(["1", "3", "3"], ["1", "2", "3"]),true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);