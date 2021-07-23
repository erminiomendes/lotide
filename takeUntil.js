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



const takeUntil = function(array, callback) {
  
  for (let i=0; i < array.length; i++){

    if(callback(array[i])){
      let remove =  ((array.length-1) - (i-1));
      return array.slice( 0, -remove); 
    }
  }
}

// **** ANOTHER SOLUTION ****
//const takeUntil = function(array, callback) {
//   let result = [];
//   for (let data of array) {
//     if (callback(data)) {
//       return result;
//     } else {
//       result.push(data);
//     }
//   }
//   return result;
// };



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
//console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
//console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
