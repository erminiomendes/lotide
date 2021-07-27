

// ACTUAL FUNCTION
// The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned


const middle = array => {
  let middleElements = [];
  // if the number of elements is even:
  if (array.length % 2 === 0) {
    middleElements.push(array[Math.floor((array.length - 1) / 2)], array[Math.ceil((array.length - 1) / 2)]);
  } else { // if the number of elements is odd:
    middleElements.push(array[(array.length - 1) / 2]);
  }
  return middleElements;
};


module.exports = middle;

