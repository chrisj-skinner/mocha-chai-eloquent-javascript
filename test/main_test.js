var expect = require('chai').expect;


// Chapter 2
describe('Chapter 2', function(){

});

// Chapter 3
describe('Chapter 3', function(){

   // Require
   const chapter3 = require('../js/exercises/chapter-3.js').chapter3;

   // Setup
   const min = chapter3.min,
      isEven = chapter3.isEven,
      countBs = chapter3.countBs,
      countChar = chapter3.countChar;

   // Exercise 1
   it('Exercise 1 should return the minimum numbered value of 2 arguments.', function(){
      expect(min(1,2)).to.equal(1);
   });

   // Exercise 2
   it('Exercise 2 should return true for the value of 50.', function(){
      expect(isEven(50)).to.be.true;
   });
   it('Exercise 2 should return false for the value of 75.', function(){
      expect(isEven(75)).to.be.false;
   });
   it('Exercise 2 should throw a \'call stack exceeded\' error for the value of -1.', function(){
      expect(isEven.bind(null, -1)).to.throw(RangeError);
   });

   // Exercise 3
   it('Exercise 3 should return a value of 1 with the following param "Baby".', function(){
      expect(countBs('Baby')).to.equal(1);
   });

   it('Exercise 3 should return a value of 2 with the following param "BABY".', function(){
      expect(countBs('BABY')).to.equal(2);
   });

   // Exercise 4
   it('Exercise 4 should return a value of 2 with the following params "Taller", "l"', function(){
      expect(countChar('Taller', 'l')).to.equal(2);
   });

   it('Exercise 4 should return a value of 1 with the following params "Taller", "T".', function(){
      expect(countChar('Taller', 'T')).to.equal(1);
   });

});
