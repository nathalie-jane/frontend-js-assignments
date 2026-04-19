/* ====================================================
	REAL-TIME WORD COUNTER
	- Extracts valid words from input text
    - Updates UI with current word count
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    - Connect JS to HTML elements: input field (user 
    text) and output field (word count display)
------------------------------------------------------- */

const wordInputElement = document.getElementById("word-counter-input");
const wordCounterValue = document.getElementById("word-counter-value");
