/*
File: functions.js
Zachary Muranaka
Functions that simplify my JavaScript without using a library like jQuery
*/

function O(object) { return typeof object === "object" ? object : document.getElementById(object); }

function S(object) { return O(object).style; }

function wEvent(triggerEvent, functionToCall) { window.addEventListener(triggerEvent, functionToCall); }
