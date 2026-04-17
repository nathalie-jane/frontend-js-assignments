/* =======================================================
    LESSON 02: KEYWORDS, STRING METHODS AND PARSE

    EXERCISE: Discount calculation
    - Ask user for price
    - Validate user input
    - Apply a 10% discount
    - Display result
========================================================== */

let userInput = prompt("Enter a price in dollars ($): "); // Ask user for price input that inludes "$"-sign

/* ---------------------------------------
    INPUT CHECK
    - Prevent further code execution if
    user cancels prompt
    - If user input exist, continue
    processing
------------------------------------------ */

if (userInput === null) {
	console.log("No input provided.");
} else {
	processPriceInput();
}

/* ---------------------------------------
    PROCESS USER INPUT
    - Convert user input into a number
    - Validate user input
    - Calculate discounted price and
    round it to two decimal places
------------------------------------------ */

function processPriceInput() {
	let priceInput = userInput.replace("$", "").replace(",", "."); // Remove "$"-sign and replace comma with dot for decimals
	let parsedPrice = parseFloat(priceInput); // Convert user input from string into number

	// If input value is non-numeric, 0 or less than 0
	if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
		console.log("Please enter a valid price."); // Output in console that value is invalid
		alert("Please enter a valid price."); // Display to user that value is invalid
		return; // Exit function when input is invalid
	}
	// Calculate discount if input is valid
	else {
		const discountPercentage = 10; // 10% discount
		const discountRate = discountPercentage / 100; // Convert 10% to decimal (0.1)
		const discountMultiplier = 1 - discountRate; // Remaining value (0.9)
		const finalPrice = discountMultiplier * parsedPrice; // Price after discount

		console.log(`The price has been reduced by 10%.\nYour final price is: $${finalPrice.toFixed(2)}`); // Output result in console
		alert(`The price has been reduced by 10%.\nYour final price is: $${finalPrice.toFixed(2)}`); // Display result to user
	}
}
