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
