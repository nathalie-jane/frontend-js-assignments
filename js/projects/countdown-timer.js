/* ====================================================
	COUNTDOWN TIMER
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    Connect JS to HTML elements

	- Countdown display 
	- Input field for minutes
	- Input field for seconds
	- Start / Pause / Resume button
	- Reset button
------------------------------------------------------- */

const timerDisplay = document.getElementById("timer-display");
const timerMinutesInput = document.getElementById("timer-minutes");
const timerSecondsInput = document.getElementById("timer-seconds");
const timerStartButton = document.getElementById("timer-button-primary");
const timerResetButton = document.getElementById("timer-button-secondary");

/* --------------------------------------------
	TIMER OBJECT

	- remainingSeconds
		Stores remaining countdown time in seconds 
		(default → 0)

	- intervalId
		Stores timer interval while countdown is
		running (default → null)

	- isRunning
		Checks if timer is currently active 
		(default → not running)

	- getInputValues()
		Collects and validates user input

	- start()
		Starts countdown timer

	- updateCountdown()
		Decreases countdown value every second

	- pause()
		Pauses active countdown

	- reset()
		Resets timer values and display to 
		default state

	- updateDisplay()
		Formats and updates timer output in UI
------------------------------------------------ */

const countdownTimer = {
	remainingSeconds: 0,
	intervalId: null,
	isRunning: false,

	getInputValues() {
		let inputMinutes = timerMinutesInput.valueAsNumber;
		let inputSeconds = timerSecondsInput.valueAsNumber;

		if (Number.isNaN(inputMinutes)) {
			inputMinutes = 0;
		}
		if (Number.isNaN(inputSeconds)) {
			inputSeconds = 0;
		}

		let totalSeconds = inputMinutes * 60 + inputSeconds;
		this.remainingSeconds = totalSeconds;
		console.log(`${this.remainingSeconds} seconds`); // For testing
		return this.remainingSeconds;
	},
	start() {
		if (this.remainingSeconds === 0) {
			this.getInputValues();
		}
		if (this.remainingSeconds === 0) {
			return;
		}
		if (this.isRunning === true) {
			return;
		} else {
			this.isRunning = true;
			this.updateDisplay();

			this.intervalId = setInterval(() => {
				this.updateCountdown();
			}, 1000);
		}
	},
	updateCountdown() {
		if (this.remainingSeconds > 0) {
			this.remainingSeconds -= 1;
			this.updateDisplay();
			console.log(this.remainingSeconds); // For testing
		}
		if (this.remainingSeconds <= 0) {
			clearInterval(this.intervalId);
			this.isRunning = false;
			console.log("Timer stopped"); // For testing
			return;
		}
	},
	pause() {
		clearInterval(this.intervalId);
		this.isRunning = false;
		console.log("Countdown paused"); // For testing
	},
	reset() {
		clearInterval(this.intervalId);
		this.remainingSeconds = 0;
		this.updateDisplay();
		this.isRunning = false;
		console.log("Countdown reset"); // For testing
	},
	updateDisplay() {
		let minutes = Math.trunc(this.remainingSeconds / 60);
		let seconds = this.remainingSeconds % 60;

		let formattedMinutes = minutes.toString();
		let formattedSeconds = seconds.toString();
		formattedMinutes = formattedMinutes.padStart(2, "0");
		formattedSeconds = formattedSeconds.padStart(2, "0");

		const displayTime = formattedMinutes + ":" + formattedSeconds;
		timerDisplay.textContent = displayTime;
		console.log(displayTime); // For testing
	},
};

/* ----------------------------------------------------
	START BUTTON HANDLER
------------------------------------------------------- */

function handleStartButtonClick() {
	if (countdownTimer.isRunning === true) {
		countdownTimer.pause();
		timerStartButton.textContent = "Resume";
	} else {
		countdownTimer.start();
		if (countdownTimer.isRunning === true) {
			timerStartButton.textContent = "Pause";
		}
	}
}

/* ----------------------------------------------------
	RESET BUTTON HANDLER
------------------------------------------------------- */

function handleResetButtonClick() {
	countdownTimer.reset();
}

/* ----------------------------------------------------
    BUTTON EVENTS
------------------------------------------------------- */

timerStartButton.addEventListener("click", handleStartButtonClick);
timerResetButton.addEventListener("click", handleResetButtonClick);
