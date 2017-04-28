// Excercise 1
// Write a function min that takes two arguments and returns their minimum.

function min(a, b){
   return (a > b) ? b : a;
}

// Excercise 2
function isEven(num){
   if (num === 0) {
      return true;
   } else if (num === 1) {
      return false;
   } else {
      return isEven(num - 2);
   }
}

// Excercise 3
var chapter3 = {
   min: min,
   isEven: isEven
};

module.exports.chapter3 = chapter3;
