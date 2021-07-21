const assertEqual = function(actual, expected) {
  //let x = console.assert( actual + expected === 2 )
  
  if ( actual === expected ){
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  }else {
    console.log(`Assertion Failed: ${actual} !== ${expected} `);
  }

};

const eqArrays = function(arr1,arr2){
  if(arr1.length !== arr2.length){
    return false
  };
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    };
  }
  return true
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);