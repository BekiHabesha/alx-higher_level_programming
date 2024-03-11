#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A script that prints a square
    The first argument is the size of the square
    If the first argument can’t be converted to an integer, print “Missing size”
    Must use the character X to print the square
    Must use console.log(...) to print all output
    Not allowed to use var
    Must use a loop (while, for, etc.)
*/

if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
  const x = Number(process.argv[2]);
  let i = 0;
  while (i < x) {
    console.log('X'.repeat(x));
    i++;
  }
}
