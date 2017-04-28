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
function countBs(string){
   let count = 0;

   for (let i = 0; i < string.length; i++) {
      (string[i] === 'B') ? count++ : null ;
   }
   return count;
}

// Excercise 4
function countChar(string, char){
   let count = 0;

   for (let i = 0; i < string.length; i++) {
      (string[i] === char) ? count++ : null ;
   }
   return count;
}

// Create object to export
const chapter3 = {
   min: min,
   isEven: isEven,
   countBs: countBs,
   countChar: countChar
};

module.exports.chapter3 = chapter3;
