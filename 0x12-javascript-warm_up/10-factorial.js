#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A script that computes and prints a factorial
    The first argument is integer (argument can be cast as integer) used for computing the factorial
    Factorial of NaN is 1
    Must do it recursively
    ust use a function
    Must use console.log(...) to print all output
    Not allowed to use var
*/

function factorial (n) {
  if (n < 0) {
    return (-1);
  }
  if (n === 0 || isNaN(n)) {
    return (1);
  }
  return (n * factorial(n - 1));
}

console.log(factorial(Number(process.argv[2])));
