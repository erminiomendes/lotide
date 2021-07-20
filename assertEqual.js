// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //let x = console.assert( actual + expected === 2 )
  
  if ( actual === expected ){
    console.log(`Assertion Passed: ${actual} !== ${expected} `);
  }else {
    console.log(`Assertion Failed: ${actual} === ${expected} `);
  }

};
 console.log("test");
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);