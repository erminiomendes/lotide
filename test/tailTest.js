const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

// TEST CODE
assertArraysEqual(tail([3,6]), [6]);
assertArraysEqual(tail(["Hello", "lightHouse", "Labs"]), ["lightHouse", "Labs"]);