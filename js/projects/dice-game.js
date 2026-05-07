/* ====================================================
	DICE GAME (ROLL A 6 TO WIN)

	- Handles button button interaction
	- Generates random dice rolls
	- Updates UI with visuals, feedback and roll count
	- Manages game flow and reset
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    Connect JS to HTML elements

	- Action button (roll dice / play again)
    - Game interface container
    - Game feedback display (win / retry)
    - Roll count display
    - All dice face images (1-6)
------------------------------------------------------- */

const diceGameButton = document.getElementById("dice-game-button");
const diceGameInterface = document.getElementById("dice-game-interface");
const diceGameFeedback = document.getElementById("dice-game-feedback");
const diceGameCount = document.getElementById("dice-game-roll-count");
const diceGameImages = document.querySelectorAll(".dice-game__dice-face");

/* ----------------------------------------------------
    GAME STATE
    Manage current game state

    - Check if game has started (default → not started)
    - Check if player has won (default → not won)
    - Count number of rolls (default → 0)
------------------------------------------------------- */

let hasGameStarted = false;
let hasUserWon = false;
let rollCount = 0;

/* ----------------------------------------------------
    DICE ROLL GENERATOR
    Generate random dice value

    - Random number between 1-6
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
    DICE DISPLAY
    Update dice visuals based on rolled value

    - Loop through all dice faces (1-6)
    - Display correct dice image for rolled value
    - Hide dice images on game reset
------------------------------------------------------- */

function displayDiceFace(diceRoll) {
	for (let i = 0; i < diceGameImages.length; i++) {
		const diceFace = diceGameImages[i];
		const diceFaceNumber = Number(diceFace.dataset.diceNumber);

		if (diceFaceNumber === diceRoll) {
			diceFace.classList.add("visible");
		} else {
			diceFace.classList.remove("visible");
		}
	}
}

function hideDiceFaces() {
	for (let i = 0; i < diceGameImages.length; i++) {
		const diceFace = diceGameImages[i];
		diceFace.classList.remove("visible");
	}
}

/* ----------------------------------------------------
    GAME FEEDBACK
    Show and reset game feedback in UI

    - Display win message when rolling a 6
    - Otherwise display retry message
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

    - Reset variables
    - Clear UI (dice, feedback, count)
    - Reset button text to "Roll Dice"
------------------------------------------------------- */

function resetDiceGame() {
	hasGameStarted = false;
	hasUserWon = false;
	rollCount = 0;

	hideDiceFaces();
	hideGameFeedback();
	hideRollCount();
	updateGameButtonText("Roll Dice");
}

/* ----------------------------------------------------
    GAME HANDLER
    Handle game logic on button click

    - Start game on first click
    - Generate dice roll
    - Update UI (rolled value, feedback, count)
    - Check for win
    - Reset game after win
------------------------------------------------------- */

function handleDiceButtonClick() {
	if (hasGameStarted === false) {
		hasGameStarted = true;
		displayGameInterface();
	} else if (hasUserWon === true) {
		hideGameInterface();
		resetDiceGame();
		return;
	}

	const diceRoll = rollDice();
	displayDiceFace(diceRoll);
	console.log(diceRoll);

	const currentRollCount = updateRollCount();
	displayRollCount(currentRollCount);

	if (diceRoll === 6) {
		displayGameFeedback("You win!");
		updateGameButtonText("Play Again");
		hasUserWon = true;
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
