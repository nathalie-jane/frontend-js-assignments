/* =======================================================
    LESSON 03: CONDITIONAL STATEMENTS AND FUNCTIONS

    ASSIGNMENT: Validate user password

    - Validation based on the following:
		- Minimum length
    	- No whitespaces
		- Cannot include username
========================================================== */

/* ------------------------------------------
    USER INPUT

    - Get username and password from user
--------------------------------------------- */

const username = prompt("Enter a username: ");
const password = prompt("Enter a password: ");

/* ------------------------------------------
    PASSWORD VALIDATION

    - Prevent further code execution if user 
	cancels prompt
    - Minimum of 8 characters
    - No spaces allowed
    - Cannot contain username
--------------------------------------------- */

function isValidPassword(password, username) {
	if (username === null || password === null) {
		console.log("No user input.");
		return;
	}

	if (password.length < 8) {
		alert("Your password must be at least 8 characters.\nPlease enter a valid password.");
		console.log("\nYour password must be at least 8 characters.\nPlease enter a valid password.");
		return false;
	}

	if (password.includes(" ")) {
		alert("Your password cannot contain spaces.\nPlease enter a valid password.");
		console.log("\nYour password cannot contain spaces.\nPlease enter a valid password.");
		return false;
	}

	if (password.includes(username)) {
		alert("Your password cannot contain your username.\nPlease enter a valid password.");
		console.log("\nYour password cannot contain your username.\nPlease enter a valid password.");
		return false;
	}

	// Input meets all requirements
	alert("Registration successful!");
	console.log("\nRegistration successful!");
	return true;
}

/* ------------------------------------------
    FUNCTION CALL

    - Runs function after user input
--------------------------------------------- */

isValidPassword(password, username);
