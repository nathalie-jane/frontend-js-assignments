/* ====================================================
	SIGN-UP FORM
    - Handles user input
    - Validates form input data
    - Updates UI with error messages or success
    message
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    - Connect JS to HTML elements: sign-up form, input 
    fields (username and password), validation
    feedback (error and success)
------------------------------------------------------- */

const signUpForm = document.getElementById("signup-form");

const userInput = {
	username: document.getElementById("signup-username"),
	password: document.getElementById("signup-password"),
};

const errorMessage = {
	username: document.getElementById("error-message-username"),
	password: document.getElementById("error-message-password"),
};

const signUpMessage = document.getElementById("signup-confirmation");

/* ----------------------------------------------------
	VALIDATION PATTERNS
    - Define RegEx patterns for valid username and
    password inputs
------------------------------------------------------- */

const validationPattern = {
	username: /^[A-Za-z0-9_-]+$/,
	passwordUppercase: /[A-Z]/,
	passwordLowercase: /[a-z]/,
	passwordNumber: /\d/,
	passwordSpecialCharacter: /[!@#$%^&*?_\-]/,
};

/* ----------------------------------------------------
	INPUT HANDLING
	- Get input values for username and password
    - Display error message for invalid inputs
------------------------------------------------------- */

function getInputValues() {
	const input = {
		username: userInput.username.value,
		password: userInput.password.value,
	};

	return input;
}

function displayError(errorField, message) {
	errorField.classList.add("signup-form__error--display");
	errorField.textContent = message;
}

/* ----------------------------------------------------
	VALIDATION: USERNAME
    - Check length (3-20 characters)
    - Validate RegEx pattern for username
    - Display error message if invalid
------------------------------------------------------- */

function validateUsername(username) {
	const usernameLength = username.length;
	const usernamePattern = validationPattern.username.test(username);

	if (usernameLength < 3 || usernameLength > 20) {
		displayError(errorMessage.username, "Username must be between 3-20 characters.");
		console.log("Username must be between 3-20 characters.");
		return false;
	}

	if (!usernamePattern) {
		displayError(errorMessage.username, "Please enter a valid username.");
		console.log("Please enter a valid username.");
		return false;
	}

	return true;
}

/* ----------------------------------------------------
	EVENTS
    - Prevent default form submission
    - Run validation on submit
------------------------------------------------------- */

signUpForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const formInputs = getInputValues();
	const isUsernameValid = validateUsername(formInputs.username);
});
