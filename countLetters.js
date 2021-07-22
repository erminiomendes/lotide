const assertEqual = function(actual, expected) {
  
  if ( actual === expected ){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected} `);
  }else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `);
  }

};

const countLetters = function(cLetter){
  const results = {};
  for (let letter of cLetter){
    if (results[letter]) {
      results[letter] += 1;
      //console.log(results[letter] +letter);
    } else {
      results[letter] = 1;
      //console.log(results[letter] + letter);
    }
  }
  return results;
};

console.log(countLetters('lhl'));