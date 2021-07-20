// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //let x = console.assert( actual + expected === 2 )
  
  if ( actual === expected ){
    console.log(`Assertion Passed: ${actual} !== ${expected} `);
  }else {
    console.log(`Assertion Failed: ${actual} === ${expected} `);
  }

};

const head = function(x){

    return x[0];
 
}

// TEST CODE
assertEqual(head([3,2]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");