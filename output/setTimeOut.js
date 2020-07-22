"use strict";

var Message = function Message() {
  var a = document.getElementById("demo");
  setTimeout(function () {
    a.value = '10..';
  }, 1000);
  setTimeout(function () {
    a.value = '09..';
  }, 2000);
  setTimeout(function () {
    a.value = '08..';
  }, 3000);
  setTimeout(function () {
    a.value = '07..';
  }, 4000);
  setTimeout(function () {
    a.value = '06..';
  }, 5000);
  setTimeout(function () {
    a.value = '05..';
  }, 6000);
  setTimeout(function () {
    a.value = '04..';
  }, 7000);
  setTimeout(function () {
    a.value = '03..';
  }, 8000);
  setTimeout(function () {
    a.value = '02..';
  }, 9000);
  setTimeout(function () {
    a.value = '01..';
  }, 10000);
  setTimeout(function () {
    a.value = 'Happy morning..';
  }, 11000);
};

Message();