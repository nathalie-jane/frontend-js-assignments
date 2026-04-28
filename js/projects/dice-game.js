const diceGameButton = document.getElementById("dice-game-button");
const diceGameInterface = document.getElementById("dice-game-interface");

function displayGameInterface() {
	diceGameInterface.classList.add("visible");
}

function rollDice() {
	const diceRoll = Math.floor(Math.random() * 6) + 1;
	return diceRoll;
}

function handleDiceButtonClick() {
	displayGameInterface();

	const diceRoll = rollDice();
	console.log(diceRoll);
}

diceGameButton.addEventListener("click", handleDiceButtonClick);
