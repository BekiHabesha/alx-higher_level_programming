#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A script that prints the addition of 2 integers
    The first argument is the first integer
    The second argument is the second integer
    Have to define a function with this prototype: function add(a, b)
    Must use console.log(...) to print all output
    Not allowed to use var
*/

function add (a, b) {
  const c = a + b;
  console.log(c);
}

add(Number(process.argv[2]), Number(process.argv[3]));
