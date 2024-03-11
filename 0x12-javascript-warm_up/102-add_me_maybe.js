#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A function that increments and calls a function.
     The function must be visible from outside
     Prototype: function (number, theFunction)
     Not allowed to use var
*/

exports.addMeMaybe = function (number, theFunction) {
  theFunction(++number);
};
