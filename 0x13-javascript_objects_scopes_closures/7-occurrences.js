#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A function that returns the number of occurrences in a list:
     Prototype: exports.nbOccurences = function (list, searchElement)
*/

exports.nbOccurences = function (list, searchElement) {
  let nOccurrences = 0;
  for (let i = 0; i < list.length; i++) {
    if (searchElement === list[i]) {
      nOccurrences++;
    }
  }
  return nOccurrences;
};
