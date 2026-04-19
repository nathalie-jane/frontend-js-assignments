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

/* ----------------------------------------------------
	INPUT HANDLING
	- Get user input
    - Process text and extract words using RegEx
    - Return total word count
------------------------------------------------------- */

function getInputText(textInput) {
	textInput = wordInputElement.value;
	return textInput;
}

function processText(text) {
	text = getInputText();
	const processedText = text.trim().match(/\p{L}+(?:['-]\p{L}+)*/gu); // Valid words inludes Unicode letters, hyphens and apostrophes.
	return processedText;
}

function extractWords(textToWords) {
	textToWords = processText();
	const words = textToWords.length;
	return words;
}

/* ----------------------------------------------------
    UI OUTPUT
	- Add CSS class when word count is greater than 0
	- Remove class when count is 0 (default state)
------------------------------------------------------- */

function wordCounter(numberOfWords) {
	if (numberOfWords > 0) {
		wordCounterValue.classList.add("word-counter__value--active");
		wordCounterValue.textContent = `${numberOfWords}`;
		console.log(numberOfWords);
	} else {
		wordCounterValue.classList.remove("word-counter__value--active");
		wordCounterValue.textContent = `${numberOfWords}`;
	}
}
