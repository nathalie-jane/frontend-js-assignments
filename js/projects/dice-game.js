/* ----------------------------------------------------
    DOM SELECTORS
    Connect JS to HTML elements

	- Roll dice button
    - Game interface container
    - Game feedback display
    - Roll count display
------------------------------------------------------- */

const diceGameButton = document.getElementById("dice-game-button");
const diceGameInterface = document.getElementById("dice-game-interface");
const diceGameFeedback = document.getElementById("dice-game-feedback");
const diceGameCount = document.getElementById("dice-game-roll-count");

/* ----------------------------------------------------
    GAME STATE
    Manage current game state

    - Check if game has started (default → not started)
    - Check if player has won (default → not won)
    - Count number of rolls (default → 0)
------------------------------------------------------- */

let isGameStarted = false;
let hasWon = false;
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
    GAME UI
    Manage game interface

    - Show interface when game is active
    - Hide interface (default and after game reset)
------------------------------------------------------- */

function displayGameInterface() {
	diceGameInterface.classList.add("visible");
}

function hideGameInterface() {
	diceGameInterface.classList.remove("visible");
}

/* ----------------------------------------------------
    GAME FEEDBACK
    Show and reset game feedback in UI

    - Display win or retry message
    - Clear message on new game
------------------------------------------------------- */

function displayGameFeedback(text) {
	diceGameFeedback.classList.add("visible");
	diceGameFeedback.textContent = text;
}

function hideGameFeedback() {
	diceGameFeedback.classList.remove("visible");
	diceGameFeedback.textContent = "";
}

/* ----------------------------------------------------
    DICE ROLL COUNT
    Track and show number of rolls in UI

    - Increase counter on each roll
    - Display current number of rolls
    - Reset count on new game
------------------------------------------------------- */

function updateRollCount() {
	rollCount++;
	return rollCount;
}

function displayRollCount(count) {
	diceGameCount.classList.add("visible");
	diceGameCount.textContent = `Rolls: ${count}`;
}

function hideRollCount() {
	diceGameCount.classList.remove("visible");
	diceGameCount.textContent = "";
}

/* ----------------------------------------------------
    BUTTON STATE
    Update button text base on game state

    - "Roll Dice" (default)
    - "Play Again" (on win)
------------------------------------------------------- */

function updateGameButtonText(action) {
	diceGameButton.textContent = action;
}

/* ----------------------------------------------------
    GAME RESET
    Reset game and UI to default state

    - Reset game state values
    - Hide game feedback and count
    - Reset button text to "Roll Dice"
------------------------------------------------------- */

function resetDiceGame() {
	isGameStarted = false;
	hasWon = false;
	rollCount = 0;

	hideGameFeedback();
	hideRollCount();
	updateGameButtonText("Roll Dice");
}

/* ----------------------------------------------------
    GAME HANDLER
    Handle game state on button click

    - Start game on first click
    - Generate dice roll
    - Update UI with feedback and roll count
    - Check for win
    - Reset game after win
------------------------------------------------------- */

function handleDiceButtonClick() {
	if (isGameStarted === false) {
		isGameStarted = true;
		displayGameInterface();
	} else if (hasWon === true) {
		hideGameInterface();
		resetDiceGame();
		return;
	}

	const diceRoll = rollDice();
	console.log(diceRoll);

	const currentRollCount = updateRollCount();
	displayRollCount(currentRollCount);

	if (diceRoll === 6) {
		displayGameFeedback("You win!");
		updateGameButtonText("Play Again");
		hasWon = true;
	} else {
		displayGameFeedback("Try again!");
	}
}

/* ----------------------------------------------------
    BUTTON EVENT
    Handle game on button click

    - Run Game Handler on click
------------------------------------------------------- */

diceGameButton.addEventListener("click", handleDiceButtonClick);
