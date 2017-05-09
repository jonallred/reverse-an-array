function reverseArray (arr) {                  // Reverse an array by creating a new array. 
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
return newArr;
}

function reverseArrayInPlace (arr) {          // Reverse an array in place; do so within the given array.
  var gap = 2;
  var l = arr.length;
 for (i = l; i < l * 2 - 1; i++) {
   
  arr[i] = arr[i - gap];
   gap += 2;
 }
  for (i = 0; i < l - 1; i++) {
    arr.shift();
  }
  return arr;
}
console.log(reverseArray(["A", "B", "C"]));      
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
