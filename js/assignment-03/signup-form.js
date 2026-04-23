/* ====================================================
	SIGN-UP FORM
    - Handles user input
    - Validates form input data
    - Updates UI with error messages or success
    feedback
====================================================== */

/* ----------------------------------------------------
    DOM SELECTORS
    - Connect JS to HTML elements:
		- Sign-up form
		- Input fields (username and password)
		- Validation messages (error and success)
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
	username: /^[A-Za-z0-9_-]+$/, // Allows only letters, numbers, underscore and hyphen
	passwordUppercase: /[A-Z]/, // At least one uppercase letter
	passwordLowercase: /[a-z]/, // At least one lowercase letter
	passwordNumber: /\d/, // At least one number
	passwordSpecialCharacter: /[!@#$%^&*?_\-]/, // At least one special character
};

/* ----------------------------------------------------
	INPUT HANDLING
	- Get input values for username and password
    - Display error message for invalid inputs
	- Clear existing error messages when user starts 
	typing
	- Hide form element and instead show confirmation
	message in UI on successful submit
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

function clearError(errorField) {
	errorField.classList.remove("signup-form__error--display");
	errorField.textContent = "";
}

function displaySignUpConfirmation() {
	signUpMessage.classList.add("visible");
	signUpForm.classList.add("hidden");
}

/* ----------------------------------------------------
	VALIDATION: USERNAME
    - Check length (3-20 characters)
    - Check for valid username characters
    - Display error message if validation fails
------------------------------------------------------- */

function validateUsername(username) {
	const usernameLength = username.length;
	const isValidUsername = validationPattern.username.test(username);

	if (usernameLength < 3 || usernameLength > 20) {
		displayError(errorMessage.username, "Username must be between 3-20 characters.");
		console.log("Username must be between 3-20 characters.");
		return false;
	}

	if (!isValidUsername) {
		displayError(errorMessage.username, "Please enter a valid username.");
		console.log("Please enter a valid username.");
		return false;
	}

	return true;
}

/* ----------------------------------------------------
	VALIDATION: PASSWORD
    - Check for whitespace characters
    - Check length (minimum 8 characters)
    - Validate RegEx pattern for password
    - Display error message if validation fails
------------------------------------------------------- */

function validatePassword(password) {
	const passwordHasSpaces = password.includes(" ");
	const passwordLength = password.length;
	const passwordHasUppercase = validationPattern.passwordUppercase.test(password);
	const passwordHasLowercase = validationPattern.passwordLowercase.test(password);
	const passwordHasNumber = validationPattern.passwordNumber.test(password);
	const passwordHasSpecialCharacters = validationPattern.passwordSpecialCharacter.test(password);

	if (passwordHasSpaces) {
		displayError(errorMessage.password, "Password cannot contain whitespace characters.");
		console.log("Password cannot contain whitespace characters.");
		return false;
	}

	if (passwordLength < 8) {
		displayError(errorMessage.password, "Password must be at least 8 characters.");
		console.log("Password must be at least 8 characters.");
		return false;
	}

	if (!(passwordHasUppercase && passwordHasLowercase && passwordHasNumber && passwordHasSpecialCharacters)) {
		displayError(
			errorMessage.password,
			"Password must include at least one uppercase letter, a lowercase letter, a number and a special character.",
		);
		console.log("Password must include at least one uppercase letter, a lowercase letter, a number and a special character.");
		return false;
	}

	return true;
}

/* ----------------------------------------------------
	EVENT: FORM SUBMIT
	- Handle form submission when "Sign Up" button is
	clicked
	- Prevent default form submission
	- Validate username and password inputs
    - Display UI feedback based on validation result
------------------------------------------------------- */

signUpForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const formInputs = getInputValues();
	const isUsernameValid = validateUsername(formInputs.username);
	const isPasswordValid = validatePassword(formInputs.password);

	if (isUsernameValid && isPasswordValid) {
		displaySignUpConfirmation();
		console.log("Registration successful!");
	}
});

/* ----------------------------------------------------
	EVENT: INPUT FEEDBACK
	- Clear existing error messages when user starts 
	typing
------------------------------------------------------- */

userInput.username.addEventListener("input", function () {
	clearError(errorMessage.username);
});

userInput.password.addEventListener("input", function () {
	clearError(errorMessage.password);
});
