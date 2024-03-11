#!/usr/bin/node
/* Author: Bereket Dereje */
/*
Update the given script
       by adding a new function incr
       that increments the integer value.

   Not allowed to use var
*/

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
/* MY CODE IS STARTS HERE */
myObject.incr = function () {
  this.value++;
}; /* MY CODE IS ENDS HERE */
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
