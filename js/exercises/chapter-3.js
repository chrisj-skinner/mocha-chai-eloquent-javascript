// Excercise 1
// Write a function min that takes two arguments and returns their minimum.

function min(a, b){
   return (a > b) ? b : a;
}

// Excercise 2
// Define a recursive function isEven corresponding to this description.
// The function should accept a number parameter and return a Boolean.
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.

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
// Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters are
// in the string.

function countBs(string){
   let count = 0;

   for (let i = 0; i < string.length; i++) {
      (string[i] === 'B') ? count++ : null ;
   }
   return count;
}

// Excercise 4
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that is
// to be counted.

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
