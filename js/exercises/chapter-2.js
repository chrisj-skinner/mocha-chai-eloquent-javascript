// Excercise 1

// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = '#'; i.length < 8; i+= '#') {
   console.log(i);
}

// Excercise 2

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//
// When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let i = 0; i <= 100; i++) {
   let output = '';
   if ( i % 3 == 0 ) {
      output +='Fizz';
   } if ( i % 5 == 0 ) {
      output +='Buzz';
   }
   console.log(output || i);
}

// Excercise 3

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
//
// Passing this string to console.log should show something like this:
//
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

const sizeOfChessboard = 8;
let chessboard = '';

// Outter loop
for (let i = 0; i < sizeOfChessboard; i++) {
   // Inner loop
   for (let j = 0; j < sizeOfChessboard; j++) {
      if ( (i + j) % 2 == 0) {
         chessboard += ' ';
      } else {
         chessboard += '#';
      }
   }
   chessboard += '\n';
}
console.log(chessboard);
