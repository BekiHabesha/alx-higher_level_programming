#!/usr/bin/node
/* Author: Bereket Dereje */
/*
a class Square that defines a square and inherits from Square of 5-square.js:
     Must use the class notation for defining a class and extends
     Create an instance method called charPrint(c) that prints the rectangle using the character c
            If c is undefined, use the character X
*/

const SquareP = require('./5-square');

class Square extends SquareP {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let s = '';
      for (let j = 0; j < this.width; j++) {
        s += c;
      }
      console.log(s);
    }
  }
}

module.exports = Square;
