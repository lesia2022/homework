"use strict";
const a = +prompt("The first number?");
const b = +prompt("The second number?");

sum(a,b);
function sum(a,b){
	const sum = a+b;
	logToConsole(a,b,sum," + ");
}

minus(a,b);
function minus(a,b){
	const minus = a-b;
	logToConsole(a,b,minus," - ");
}

multiply(a,b);
function multiply(a,b){
	const multiply = a*b;
	logToConsole(a,b,multiply," * ");
}

divide(a,b);
function divide(a,b){
	const divide = a/b;
	logToConsole(a,b,divide," / ");
}
function logToConsole(a,b,result,operation){
	console.log("Result: " + a + operation + b + " = " + result);
}