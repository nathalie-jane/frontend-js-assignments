/* ====================================================
	CALCULATOR: Basic arithmetic calculator
	- Collects and converts user input
	- Performs calculations based on button clicks
	- Displays results or error messages in the UI
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    - Store references to DOM elements in variables
------------------------------------------------------- */

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

/* ----------------------------------------------------
	FUNCTION: Input conversion
	- Convert input values from strings to numbers
    - Return both converted numbers as an object
------------------------------------------------------- */

function convertInputToNumber() {
	const inputNumber1 = inputValue1.valueAsNumber;
	const inputNumber2 = inputValue2.valueAsNumber;

	const convertedInputs = {
		number1: inputNumber1,
		number2: inputNumber2,
	};

	return convertedInputs;
}

/* ----------------------------------------------------
    FUNCTIONS: Arithmetic operations
	- Perform calculations
	- Log operation and result to console
	- Return calculated result
------------------------------------------------------- */

function calculateAddition(number1, number2) {
	console.log(`${number1} + ${number2} = ${number1 + number2}`);
	return number1 + number2;
}

function calculateSubtraction(number1, number2) {
	console.log(`${number1} - ${number2} = ${number1 - number2}`);
	return number1 - number2;
}

function calculateMultiplication(number1, number2) {
	console.log(`${number1} * ${number2} = ${number1 * number2}`);
	return number1 * number2;
}

function calculateDivision(number1, number2) {
	console.log(`${number1} / ${number2} = ${number1 / number2}`);
	return number1 / number2;
}

/* ----------------------------------------------------
    FUNCTION: Display output field in UI
	- Add CSS class to output element to make it 
	visible
------------------------------------------------------- */

function showOutput() {
	outputResult.classList.add("calculator__output--visible");
}

/* ----------------------------------------------------
    FUNCTION: Display result
	- Display calculated result in output field
------------------------------------------------------- */

function displayResult(result) {
	outputResult.textContent = `Result: ${result}`;
	showOutput();
}

/* ----------------------------------------------------
    FUNCTION: Display error message
	- Error message is displayed in output field if 
	input is invalid	
------------------------------------------------------- */

function displayError(message) {
	outputResult.textContent = `Error: ${message}`;
	showOutput();
}

/* ----------------------------------------------------
    FUNCTIONS: Handle action button clicks
    - Get converted input values
	- Validate inputs and display error if invalid
	- Perform calculations and display result	
------------------------------------------------------- */

function handleAddButtonClick() {
	const convertedInputs = convertInputToNumber();

	if (Number.isNaN(convertedInputs.number1) || Number.isNaN(convertedInputs.number2)) {
		displayError("Enter a valid number");
		console.log("Enter a valid number");
		return;
	}

	const result = calculateAddition(convertedInputs.number1, convertedInputs.number2);
	displayResult(result);
}

function handleSubtractButtonClick() {
	const convertedInputs = convertInputToNumber();

	if (Number.isNaN(convertedInputs.number1) || Number.isNaN(convertedInputs.number2)) {
		displayError("Enter a valid number");
		console.log("Enter a valid number");
		return;
	}

	const result = calculateSubtraction(convertedInputs.number1, convertedInputs.number2);
	displayResult(result);
}

function handleMultiplyButtonClick() {
	const convertedInputs = convertInputToNumber();

	if (Number.isNaN(convertedInputs.number1) || Number.isNaN(convertedInputs.number2)) {
		displayError("Enter a valid number");
		console.log("Enter a valid number");
		return;
	}

	const result = calculateMultiplication(convertedInputs.number1, convertedInputs.number2);
	displayResult(result);
}

function handleDivideButtonClick() {
	const convertedInputs = convertInputToNumber();

	if (Number.isNaN(convertedInputs.number1) || Number.isNaN(convertedInputs.number2)) {
		displayError("Enter a valid number");
		console.log("Enter a valid number");
		return;
	}
	if (convertedInputs.number2 === 0) {
		displayError("Cannot divide by zero");
		console.log("Cannot divide by zero");
		return;
	}

	const result = calculateDivision(convertedInputs.number1, convertedInputs.number2);
	displayResult(result);
}

/* ----------------------------------------------------
    EVENT LISTENERS: Button clicks
    - Connect action buttons to their respective
    functions to perform calculations on click
------------------------------------------------------- */

addButton.addEventListener("click", handleAddButtonClick);
subtractButton.addEventListener("click", handleSubtractButtonClick);
multiplyButton.addEventListener("click", handleMultiplyButtonClick);
divideButton.addEventListener("click", handleDivideButtonClick);
