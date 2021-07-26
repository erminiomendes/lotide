const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays ? console.log(`✅✅✅ Assertion Passed: ${actual} ==== ${expected}`) : console.log(`🔴🔴🔴 Assertation Failed: ${actual} !== ${expected}`);
};

assertArraysEqual(eqArrays([1, 3, 3], [1, 2, 3]),true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertArraysEqual(eqArrays(["1", "3", "3"], ["1", "2", "3"]),true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);