/* ====================================================
    DOM SELECTORS
    Store references to DOM elements in variables
======================================================= */

// Input fields
const inputValue1 = document.getElementById("calculator__input--01");
const inputValue2 = document.getElementById("calculator__input--02");

// Action buttons
const addButton = document.getElementById("btn__add");
const subtractButton = document.getElementById("btn__subtract");
const multiplyButton = document.getElementById("btn__multiply");
const divideButton = document.getElementById("btn__divide");

// Output field
const outputResult = document.getElementById("calculator__output");

/* ====================================================
    FUNCTIONS: Arithmetic operations
	Perform calculations and return the result
======================================================= */

function calculateAddition(number1, number2) {
	return number1 + number2;
}

function calculateSubtraction(number1, number2) {
	return number1 - number2;
}

function calculateMultiplication(number1, number2) {
	return number1 * number2;
}

function calculateDivision(number1, number2) {
	return number1 / number2;
}
