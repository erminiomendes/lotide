// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //let x = console.assert( actual + expected === 2 )
  
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} !== ${expected} `);
  } else {
    console.log(`Assertion Failed: ${actual} === ${expected} `);
  }

};

const tail = function(x) {
  let arr = [];
  for (let i = 1; i < x.length; i++) {
    arr.push(x[i]);
  }

  return arr;
 
};

// TEST CODE
assertEqual(tail([3,2,3,6]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");