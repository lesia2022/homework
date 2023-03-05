"use strict";
let action = prompt("What kind of operation do you want to perform? (add,sub,mult, div)");
const a = +prompt("The first number?");
const b = +prompt("The second number?");

switch (action) {
  case "add":
    console.log(`${a} + ${b} = ${a+b}`);
    break;

  case "sub":
    console.log(`${a} - ${b} = ${a-b}`);
    break;

  case "mult":
    console.log(`${a} * ${b} = ${a*b}`);
    break;

  case "div":
    console.log(`${a} / ${b} = ${a/b}`);
    break;

  default:
    console.log("Incorrect operation!");
}



