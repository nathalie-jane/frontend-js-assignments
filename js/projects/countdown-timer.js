/* ====================================================
	COUNTDOWN TIMER

	- Handles countdown timer functionality with 
	  start, pause, resume and reset features
	- Manages user input for minutes and seconds
	- Updates UI with formatted time display and button 
	  states
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    Connect JS to HTML elements

	- Countdown display output
	- Input field container
	- Minutes input field
	- Seconds input field
	- Start / Pause / Resume button
	- Reset button
------------------------------------------------------- */

const timerDisplay = document.getElementById("timer-display");
const timerInputGroup = document.getElementById("timer-input-group");
const timerMinutesInput = document.getElementById("timer-minutes");
const timerSecondsInput = document.getElementById("timer-seconds");
const timerStartButton = document.getElementById("timer-button-primary");
const timerResetButton = document.getElementById("timer-button-secondary");

/* --------------------------------------------
	COUNTDOWN TIMER OBJECT

	PROPERTIES

	- remainingSeconds
		Stores remaining countdown time in seconds 
		(default → 0)

	- intervalId
		Stores timer interval while countdown is
		running (default → null)

	- isRunning
		Checks if timer is currently active 
		(default → not running)

	METHODS

	- getInputValues()
		Collects and validates user input, and
		converts it to total seconds for countdown

	- start()
		Starts countdown timer if valid input is
		provided and timer is not already running

	- stop()
		Stops active countdown interval and resets
		timer state

	- updateCountdown()
		Decreases countdown value every second and
		updates display; stops timer when it reaches 
		zero

	- pause()
		Pauses active countdown without resetting
		current timer values

	- reset()
		Restores countdown values, display and
		timer state to default

	- updateDisplay()
		Formats remaining seconds into MM:SS, and 
		updates timer display in UI
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
		// console.log(`${this.remainingSeconds} seconds`);
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
		}

		this.isRunning = true;
		this.updateDisplay();

		this.intervalId = setInterval(() => {
			this.updateCountdown();
		}, 1000);
	},
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
		this.isRunning = false;
	},
	updateCountdown() {
		if (this.remainingSeconds > 0) {
			this.remainingSeconds -= 1;
			this.updateDisplay();
			// console.log(this.remainingSeconds);
		}
		if (this.remainingSeconds <= 0) {
			this.stop();
			clearInputValues();
			updatePrimaryButtonState("Start");
			restoreInterface();

			// console.log("Timer stopped");
			return;
		}
	},
	pause() {
		this.stop();
		// console.log("Countdown paused");
	},
	reset() {
		this.stop();
		this.remainingSeconds = 0;
		this.updateDisplay();
		clearInputValues();
		// console.log("Countdown reset");
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
		// console.log(displayTime);
	},
};

/* ----------------------------------------------------
	UPDATE PRIMARY BUTTON STATE

	- Changes text content of start button based on
	  current timer state (start, pause, resume)
------------------------------------------------------- */

function updatePrimaryButtonState(text) {
	timerStartButton.textContent = text;
}

/* ----------------------------------------------------
	CLEAR INPUT VALUES

	- Resets minutes and seconds input fields to
	  placeholder state (empty) after timer is stopped
	  or reset
------------------------------------------------------- */

function clearInputValues() {
	timerMinutesInput.value = "";
	timerSecondsInput.value = "";
}

/* ----------------------------------------------------
	RESTORE INTERFACE

	- Restores input field visibility and resets UI to
	  default state after timer is stopped or reset
------------------------------------------------------- */

function restoreInterface() {
	timerInputGroup.classList.remove("hidden");
}

/* ----------------------------------------------------
	START BUTTON HANDLER

	- Controls start, pause and resume actions based on
	  current timer state
	- Updates UI accordingly (button text and input 
	  visibility)
------------------------------------------------------- */

function handleStartButtonClick() {
	if (countdownTimer.isRunning === true) {
		countdownTimer.pause();
		updatePrimaryButtonState("Resume");
	} else {
		countdownTimer.start();
		if (countdownTimer.isRunning === true) {
			timerInputGroup.classList.add("hidden");
			updatePrimaryButtonState("Pause");
		}
	}
}

/* ----------------------------------------------------
	RESET BUTTON HANDLER

	- Restores timer to default state
	- Clears input values and resets UI
------------------------------------------------------- */

function handleResetButtonClick() {
	countdownTimer.reset();
	restoreInterface();
	updatePrimaryButtonState("Start");
}

/* ----------------------------------------------------
    BUTTON EVENTS

	- Connects start and reset butttons to their
	  respective handler functions for user click 
	  interactions
------------------------------------------------------- */

timerStartButton.addEventListener("click", handleStartButtonClick);
timerResetButton.addEventListener("click", handleResetButtonClick);
