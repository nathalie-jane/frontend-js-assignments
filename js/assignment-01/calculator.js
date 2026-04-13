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
	FUNCTION: Input conversion
	Convert input values from strings to numbers
======================================================= */

function convertInputToNumber() {
	const convertInput1 = inputValue1.valueAsNumber;
	const convertInput2 = inputValue2.valueAsNumber;
}

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
