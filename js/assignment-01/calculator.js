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
    Return both converted numbers as an object
======================================================= */

function convertInputToNumber() {
	const inputNumber1 = inputValue1.valueAsNumber;
	const inputNumber2 = inputValue2.valueAsNumber;

	const convertedInputs = {
		number1: inputNumber1,
		number2: inputNumber2,
	};

	return convertedInputs;
}

/* ====================================================
    FUNCTIONS: Arithmetic operations
	Perform calculations, log operation and result to
    console, return calculated result
======================================================= */

function calculateAddition(number1, number2) {
	console.log(`${inputValue1.valueAsNumber} + ${inputValue2.valueAsNumber} = ${number1 + number2}`);
	return number1 + number2;
}

function calculateSubtraction(number1, number2) {
	console.log(`${inputValue1.valueAsNumber} - ${inputValue2.valueAsNumber} = ${number1 - number2}`);
	return number1 - number2;
}

function calculateMultiplication(number1, number2) {
	console.log(`${inputValue1.valueAsNumber} * ${inputValue2.valueAsNumber} = ${number1 * number2}`);
	return number1 * number2;
}

function calculateDivision(number1, number2) {
	console.log(`${inputValue1.valueAsNumber} / ${inputValue2.valueAsNumber} = ${number1 / number2}`);
	return number1 / number2;
}

/* ====================================================
    FUNCTION: Display result
	Calculated result is displayed in the output field
======================================================= */

function displayResult(result) {
	outputResult.textContent = `Result: ${result}`;
}

/* ====================================================
    FUNCTION: Display error message
	Error message is displayed in the output field if
	input is invalid	
======================================================= */

function displayError(message) {
	outputResult.textContent = `Error: ${message}`;
}

/* ====================================================
    FUNCTION: Handle Add Button Click
    Get converted input values, perform addition and
    display result	
======================================================= */

function handleAddButtonClick() {
	const convertedValue = convertInputToNumber();
	const result = calculateAddition(convertedValue.number1, convertedValue.number2);
	displayResult(result);
}

/* ====================================================
    EVENT HANDLERS
    Connect action buttons to their respective
    functions to perform calculations on click
======================================================= */

addButton.addEventListener("click", handleAddButtonClick);
