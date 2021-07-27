// const assertEqual = function(actual, expected){
//   if ( actual === expected ){
//     console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected} `);
//   }else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
//   }

// };

// const eqArrays = function(arr1,arr2){       // verifica se os arrays sao equivalentes
//   if(arr1.length !== arr2.length){
//     return false
//   };
//   for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       return false
//     };
//   }
//   return true
// };


const eqObjects = function(object1, object2){
  
  const obj1Keys = Object.keys(object1); // pega key ['a' , 'b'] retorna um array de propriedades
  const obj2Keys = Object.keys(object2); // pega key ['b' , 'a'] retorna um array de propriedades
  let result = true;

  for (let key of obj1Keys){
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])){  //método Array.isArray() retorna true se um objeto é uma array, e false se não é.
      result = eqArrays(object1[key], object2[key])
    } else {

      if (obj1Keys.length !== obj2Keys.length){
        return false;
      }

      if (object1[key] !== object2[key]){
        return false;
      }  
    }  
  }
  return result;
};

// TEST CODE
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);


// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);


module.exports = eqObjects;