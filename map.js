const eqArrays = (arr1, arr2) => {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map1 = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "aontrol", "to", "major", "tom"];
const numbers = [6,8,2];
const animals = ['tiger', 'lion', 'cat', 'dog'];
const results1 = map1(words, word => word[0]);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map1(numbers, num => num*10), [66,69,24]);
assertArraysEqual(map1(animals, animal => animal + "1"), ['tiger1', 'lion1', 'cat1', 'dog1']);