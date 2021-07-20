// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let x = console.assert( actual + expected === 2 )
  
  if ( x === "failed" ){
    console.log(`Assertion Failed: ${actual} !== ${expected} `);
  }else {
    console.log(`Assertion Passed: ${actual} === ${expected} `);
  }

};
 
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(2, 1);