/* ==============================================================
    Lesson 01: INTRODUCTION, VARIABLES, OPERATORS
================================================================= */

/* ----------------------------------------------------
    EXERCISE 1
    Print a message to the console
------------------------------------------------------- */

console.log("Hello, World!");

/* ----------------------------------------------------
    EXERCISE 2
    Store and print message with template literals
------------------------------------------------------- */

// Store personal information in three separate variables
let firstName = "Nathalie";
let age = 34;
let favoriteColor = "black";

// Output personal information
console.log(`My name is ${firstName}, I'm ${age} years old and my favorite color is ${favoriteColor}.`);

/* ----------------------------------------------------
    EXERCISE 3
    Basic arithmetic operations
------------------------------------------------------- */

// Store numbers in two separate variables
let number1 = 12;
let number2 = 4;

// Calculations stored in variables
const add = number1 + number2;
const subtract = number1 - number2;
const multiply = number1 * number2;
const divide = number1 / number2;

// Output calculated results
console.log(`${number1} + ${number2} = ${add}`);
console.log(`${number1} - ${number2} = ${subtract}`);
console.log(`${number1} * ${number2} = ${multiply}`);
console.log(`${number1} / ${number2} = ${divide}`);
