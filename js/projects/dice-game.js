/* ----------------------------------------------------
    DOM SELECTORS
    Connect JS to HTML elements

	- Roll dice button
    - Game interface container
    - Game message display
    - Roll count display
------------------------------------------------------- */

const diceGameButton = document.getElementById("dice-game-button");
const diceGameInterface = document.getElementById("dice-game-interface");
const diceGameFeedback = document.getElementById("dice-game-feedback");
const diceGameCount = document.getElementById("dice-game-roll-count");

/* ----------------------------------------------------
    GAME STATE

    - Count number of rolls
------------------------------------------------------- */

let rollCount = 0;

/* ----------------------------------------------------
    DICE ROLL GENERATOR
    - Generate random number (1-6)
    - Return rolled value
------------------------------------------------------- */

function rollDice() {
	const diceRoll = Math.floor(Math.random() * 6) + 1;
	return diceRoll;
}

/* ----------------------------------------------------
    GAME UI CONTROL
    - Display game interface
------------------------------------------------------- */

function displayGameInterface() {
	diceGameInterface.classList.add("visible");
}

/* ----------------------------------------------------
    GAME FEEDBACK
    Show game feedback in UI

    - Display win or retry message
------------------------------------------------------- */

function displayGameFeedback(text) {
	diceGameFeedback.classList.add("visible");
	diceGameFeedback.textContent = text;
}

/* ----------------------------------------------------
    DICE ROLL COUNT
    Track and show number of rolls in UI

    - Increase counter on each roll
    - Display current number of rolls
------------------------------------------------------- */

function updateRollCount() {
	rollCount++;
	return rollCount;
}

function displayRollCount(count) {
	diceGameCount.classList.add("visible");
	diceGameCount.textContent = `Rolls: ${count}`;
}

function updateGameButtonText(action) {
	diceGameButton.textContent = action;
}

/* ----------------------------------------------------
    GAME HANDLER
------------------------------------------------------- */

function handleDiceButtonClick() {
	displayGameInterface();

	const diceRoll = rollDice();
	console.log(diceRoll);

	const currentRollCount = updateRollCount();
	displayRollCount(currentRollCount);

	if (diceRoll === 6) {
		displayGameFeedback("You win!");
		updateGameButtonText("Play Again");
	} else {
		displayGameFeedback("Try again!");
	}
}

/* ----------------------------------------------------
    EVENT
------------------------------------------------------- */

diceGameButton.addEventListener("click", handleDiceButtonClick);
