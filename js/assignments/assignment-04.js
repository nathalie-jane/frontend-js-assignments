/* ===============================================
    Lesson 04: MATH, LOOPS, AND ARRAYS
================================================== */

/* -----------------------------------------
    EXERCISE 1: GUESS THE RANDOM NUMBER
    
    - Generate a random number between 1 
	and 10
    - Ask user to enter a number
    - Provide feedback if number is too low 
	or too high
    - Repeat until user guesses correct
--------------------------------------------- */

function guessNumberGame(minNumber, maxNumber) {
	// Generate a random number within the given range
	const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

	// Ask for user input
	const inputNumber = prompt(`Enter a number between ${minNumber} and ${maxNumber}: `);

	// Convert user input (string) to number
	let userGuess = Number(inputNumber);

	// Keep asking until user guesses the correct number
	while (userGuess !== randomNumber) {
		// If input is not a valid number (NaN)
		if (Number.isNaN(userGuess)) {
			userGuess = Number(prompt(`Please enter a valid number between ${minNumber} and ${maxNumber}: `));
		}

		// If number is outside the allowed range
		else if (userGuess < minNumber || userGuess > maxNumber) {
			userGuess = Number(prompt(`Please enter a number between ${minNumber} and ${maxNumber}: `));
		}

		// If guess is higher than the correct number
		else if (userGuess > randomNumber) {
			userGuess = Number(prompt("You guessed too high! Try again: "));
		}

		// If guess is lower than the correct number
		else if (userGuess < randomNumber) {
			userGuess = Number(prompt("You guessed too low! Try again: "));
		}
	}

	// Output to user when the correct number is guessed
	alert(`You guessed ${userGuess}. That is the correct number!`);
}

// Initialize game with numbers within the range 1-10
guessNumberGame(1, 10);
