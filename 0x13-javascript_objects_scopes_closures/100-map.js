#!/usr/bin/node
/* Author: Bereket Dereje */
/*
A script that imports an array and computes a new array.
     A script must import list from the file 100-data.js
     Must use a map.
     A new list must be created with each value equal to the value of the initial list, multipled by the index in the list
     Print both the initial list and the new list
*/

const list = require('./100-data.js').list;
console.log(list);
console.log(list.map((item, index) => item * index));
