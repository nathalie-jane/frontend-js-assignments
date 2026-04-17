/* ====================================================
	CALCULATOR: Basic arithmetic calculator
	- Collects and converts user input
	- Performs calculations based on button clicks
	- Displays results or error messages in the UI
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    - Connect JS to HTML
	- Inputs and buttons are grouped as objects
	with properties
------------------------------------------------------- */

// Inputs
const inputValues = {
	value1: document.getElementById("calculator-input-first"),
	value2: document.getElementById("calculator-input-second"),
};

// Action buttons
const buttons = {
	addButton: document.getElementById("btn-add"),
	subtractButton: document.getElementById("btn-subtract"),
	multiplyButton: document.getElementById("btn-multiply"),
	divideButton: document.getElementById("btn-divide"),
};

// Output
const outputResult = document.getElementById("result-output");

/* ----------------------------------------------------
	INPUT HANDLING
	- Convert input values from strings to numbers
    - Return both converted numbers as an object
------------------------------------------------------- */

function convertInputToNumber() {
	const inputNumber1 = inputValues.value1.valueAsNumber;
	const inputNumber2 = inputValues.value2.valueAsNumber;

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
		console.log("Error: Enter a valid number");
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
			console.log("Error: Cannot divide by zero");
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

buttons.addButton.addEventListener("click", function () {
	performCalculations("add");
});
buttons.subtractButton.addEventListener("click", function () {
	performCalculations("subtract");
});
buttons.multiplyButton.addEventListener("click", function () {
	performCalculations("multiply");
});
buttons.divideButton.addEventListener("click", function () {
	performCalculations("divide");
});
