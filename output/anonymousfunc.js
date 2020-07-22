"use strict";

var array = [1, 2, 3, 4, 5];
var sum = 0;

var a = function a(arr) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
};

a(array);
console.log(sum);