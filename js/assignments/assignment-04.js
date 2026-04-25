/* ===============================================
    Lesson 04: MATH, LOOPS, AND ARRAYS

	- EXERCISE 1: GUESS THE RANDOM NUMBER
	- EXERCISE 2:
	- EXERCISE 3:
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
	INITIALIZE GAME

	- Call game function with defined range
--------------------------------------------- */

guessNumberGame(1, 10);
