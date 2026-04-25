/* ===============================================
    Lesson 04: MATH, LOOPS, AND ARRAYS

	- EXERCISE 1: GUESS THE RANDOM NUMBER
	- EXERCISE 2: ARRAY OF RANDOM NUMBERS
	- EXERCISE 3: SUM OF EVEN NUMBERS IN AN ARRAY
================================================== */

// EXERCISE 1
/* -----------------------------------------
	GUESS NUMBER GAME
	
	- Generate a random number between 1 
	and 10
	- Get user input via prompt
	-  Prevent further code execution if user 
	cancels prompt
	- Convert user input (string) to number
	- Validate input (NaN and range)
	- Provide feedback for incorrect guess
	- Repeat until correct guess
	- Show success message via alert
--------------------------------------------- */

function guessNumberGame(minNumber, maxNumber) {
	const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
	const inputNumber = prompt(`Enter a number between ${minNumber} and ${maxNumber}: `);

	if (inputNumber === null) {
		console.log("No user input.");
		return;
	}

	let userGuess = Number(inputNumber);

	while (userGuess !== randomNumber) {
		if (userGuess === null) {
			console.log("No user input.");
			return;
		}
		if (Number.isNaN(userGuess)) {
			userGuess = getNumberInput(`Please enter a valid number between ${minNumber} and ${maxNumber}: `);
		} else if (userGuess < minNumber || userGuess > maxNumber) {
			userGuess = getNumberInput(`Please enter a number between ${minNumber} and ${maxNumber}: `);
		} else if (userGuess > randomNumber) {
			userGuess = getNumberInput("You guessed too high! Try again: ");
		} else if (userGuess < randomNumber) {
			userGuess = getNumberInput("You guessed too low! Try again: ");
		}
	}

	alert(`You guessed ${userGuess}. That is the correct number!`);
}

/* -----------------------------------------
	INPUT HANDLING (INSIDE LOOP)

	- Get user input via prompt
	-  Prevent further code execution if user 
	cancels prompt
	- Convert user input (string) to number
	- Return parsed number
--------------------------------------------- */

function getNumberInput(message) {
	const inputNumber = prompt(message);

	if (inputNumber === null) {
		console.log("No user input.");
		return null;
	} else {
		const userGuess = Number(inputNumber);
		return userGuess;
	}
}

/* -----------------------------------------
	RUN FUNCTION

	- Call game function with defined range
--------------------------------------------- */

guessNumberGame(1, 10);

// EXERCISE 2
/* -----------------------------------------
	ARRAY OF RANDOM NUMBERS

	- Create empty array
	- Run loop based on array length (number 
	of items)
	- Add a random number each time
	- Return completed array
--------------------------------------------- */

function generateRandomArray(length) {
	const numbers = [];

	for (let i = 0; i < length; i++) {
		const randomNumber = getRandomNumber(1, 100);
		numbers.push(randomNumber);
	}

	console.log(numbers);
	return numbers;
}

/* -----------------------------------------
	RANDOM NUMBER GENERATOR

	- Generate a random number within range
	- Return the number
--------------------------------------------- */

function getRandomNumber(minNumber, maxNumber) {
	const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
	return randomNumber;
}

/* -----------------------------------------
	RUN FUNCTION

	- Create an array with a defined number
	of items
--------------------------------------------- */

generateRandomArray(10);

// EXERCISE 3
/* -----------------------------------------
	SUM OF EVEN NUMBERS

	- Create variable for storing sum of
	even numbers (start with empty --> 0)
	- Loop through every item in the array
	- Check if each number in the array is
	even
	- Add even numbers to sum
	- Return total sum
--------------------------------------------- */

function sumEvenNumbers(array) {
	let evenNumbersSum = 0;

	for (let i = 0; i < array.length; i++) {
		const number = array[i];

		if (number % 2 === 0) {
			evenNumbersSum = evenNumbersSum + number;
		}
	}
	console.log(`Sum of even numbers = ${evenNumbersSum}`);
	return evenNumbersSum;
}

/* -----------------------------------------
	RUN FUNCTION	

	- Reuse function from Exercise 2 to
	generate an array of random numbers
	- Pass array into sum of even numbers
	function
--------------------------------------------- */

sumEvenNumbers(generateRandomArray(5));
