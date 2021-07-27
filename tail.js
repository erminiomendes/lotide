
// FUNCTION IMPLEMENTATION

const tail = function(x) {
  let arr = [];
  for (let i = 1; i < x.length; i++) {
    arr.push(x[i]);
  }
  return arr;

 };


module.exports = tail;
