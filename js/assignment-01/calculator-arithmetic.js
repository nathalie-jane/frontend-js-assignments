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
const inputValue1 = document.getElementById("calculator__input--first");
const inputValue2 = document.getElementById("calculator__input--second");

// Action buttons
const addButton = document.getElementById("btn__add");
const subtractButton = document.getElementById("btn__subtract");
const multiplyButton = document.getElementById("btn__multiply");
const divideButton = document.getElementById("btn__divide");

// Output field
const outputResult = document.getElementById("calculator__output");

/* ----------------------------------------------------
	INPUT HANDLING
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
    ARITHMETIC OPERATIONS
	- Perform basic arithmetic operations
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
    UI OUTPUT
	- Add CSS class to output element
	- Display calculated result in output field
	- Error message is displayed in output field if 
	input is invalid
------------------------------------------------------- */

function showOutput() {
	outputResult.classList.add("calculator__output--visible");
}

function displayResult(result) {
	outputResult.textContent = `Result: ${result}`;
	showOutput();
}

function displayError(message) {
	outputResult.textContent = `Error: ${message}`;
	showOutput();
}

/* ----------------------------------------------------
    RUN CALCULATIONS
    - Get converted input values
	- Validate inputs and display error if invalid
	- Perform calculations and display result	
------------------------------------------------------- */

function performCalculations(arithmeticOperation) {
	const convertedInputs = convertInputToNumber();

	if (Number.isNaN(convertedInputs.number1) || Number.isNaN(convertedInputs.number2)) {
		displayError("Enter a valid number");
		return;
	}

	let result;

	if (arithmeticOperation === "add") {
		result = calculateAddition(convertedInputs.number1, convertedInputs.number2);
	} else if (arithmeticOperation === "subtract") {
		result = calculateSubtraction(convertedInputs.number1, convertedInputs.number2);
	} else if (arithmeticOperation === "multiply") {
		result = calculateMultiplication(convertedInputs.number1, convertedInputs.number2);
	} else if (arithmeticOperation === "divide") {
		if (convertedInputs.number2 === 0) {
			displayError("Cannot divide by zero");
			return;
		} else {
			result = calculateDivision(convertedInputs.number1, convertedInputs.number2);
		}
	}
	displayResult(result);
}

/* ----------------------------------------------------
    EVENTS
    - Connect action buttons to their respective
    functions to perform calculations on click
------------------------------------------------------- */

addButton.addEventListener("click", function () {
	performCalculations("add");
});
subtractButton.addEventListener("click", function () {
	performCalculations("subtract");
});
multiplyButton.addEventListener("click", function () {
	performCalculations("multiply");
});
divideButton.addEventListener("click", function () {
	performCalculations("divide");
});
