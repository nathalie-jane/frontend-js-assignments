/* =======================================================
    LESSON 02: KEYWORDS, STRING METHODS AND PARSE

    ASSIGNMENT: Discount calculation
    - Ask user for price that includes "$"-sign
    - Validate user input
    - Apply a 10% discount
    - Display result
========================================================== */

let userInput = prompt("Enter a price in dollars ($): ");

/* -------------------------------------------------
    INPUT CHECK
    - Prevent further code execution if user cancels 
	prompt
	- Validate input format (only one"$"-sign at the 
	start + numbers)
    - If user input exists and is valid, continue 
	processing
---------------------------------------------------- */

if (userInput === null) {
	console.log("No input provided.");
} else if (!userInput.match(/^\$\d+$/g)) {
	console.log(userInput);
	console.log("Please enter a valid price.");
	alert("Please enter a valid price.");
} else {
	processPriceInput();
}

/* -------------------------------------------------
    PROCESS USER INPUT
    - Convert user input into a number (Remove
	"$"-sign and replace comma with dot for decimals)
    - Validate user input
    - Calculate discounted price and round it to two 
	decimal places
---------------------------------------------------- */

function processPriceInput() {
	let priceInput = userInput.replace("$", "").replace(",", ".");
	let parsedPrice = parseFloat(priceInput);

	// If input value is non-numeric, 0 or less than 0
	if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
		console.log("Please enter a valid price.");
		alert("Please enter a valid price.");
		return;
	}
	// Calculate discount if input is valid
	else {
		const discountPercentage = 10;
		const discountRate = discountPercentage / 100;
		const discountMultiplier = 1 - discountRate;
		const finalPrice = discountMultiplier * parsedPrice;

		console.log(`The price has been reduced by 10%.\nYour final price is: $${finalPrice.toFixed(2)}`);
		alert(`The price has been reduced by 10%.\nYour final price is: $${finalPrice.toFixed(2)}`);
	}
}
