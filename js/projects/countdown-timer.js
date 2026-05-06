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

/* OBJECT: COUNTDOWN TIMER

Properties:
- remainingSeconds: stores how many seconds are left
- isRunning: stores if timer is running or paused

Methods:
- getInputValues: reads minutes and seconds from user input
- start(): starts countdown
- pause(): pauses countdown
- reset(): resets timer
- updateDisplay(): updates UI with remaining time */
