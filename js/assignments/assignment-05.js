/* =======================================================
    LESSON 05: OBJECT AND SCOPE

    ASSIGNMENT: BANK ACCOUNT

	- Runs a simple ATM program
	- Handles user input using prompt()
	- Allows user to view account information
	- Handles deposit and withdrawal actions
	- Displays output using alert()
========================================================== */

/* --------------------------------------------
	ACCOUNT OBJECT

    - accountName
		Stores account name

	- balance
		Stores current account balance

    - getBalance()
		Displays and returns account balance

	- deposit(amount)
		Validates user input and adds money to
		account. Displays and returns updated 
		account balance

	- withdrawal(amount)
		Validates user input and removes money
		from account. Displays and returns updated 
		account balance

	- getAccountName()
		Displays and returns account name

	- exitAccount()
		Displays message when user exits atm()

	- accountError(outputMessage)
		Displays error message for invalid input
------------------------------------------------ */

const account = {
	accountName: "Jane Doe",
	balance: 10000,
	getBalance() {
		displayOutputMessage(`Your account balance is: ${this.balance.toFixed(2)}`);
		return this.balance;
	},
	deposit(amount) {
		if (Number.isNaN(amount) || amount <= 0) {
			return this.accountError("Please enter a valid number.");
		} else {
			this.balance += amount;
			displayOutputMessage(`Transaction completed.\nYour new balance is: ${this.balance.toFixed(2)}`);
			return this.balance;
		}
	},
	withdrawal(amount) {
		if (Number.isNaN(amount) || amount <= 0) {
			return this.accountError("Please enter a valid number.");
		} else if (amount > this.balance) {
			return this.accountError("Insufficient funds.");
		} else {
			this.balance -= amount;
			displayOutputMessage(`Transaction completed.\nYour new balance is: ${this.balance.toFixed(2)}`);
			return this.balance;
		}
	},
	getAccountName() {
		displayOutputMessage(`Your account name is: ${this.accountName}`);
		return this.accountName;
	},
	exitAccount() {
		displayOutputMessage("You have exited the account.");
	},
	accountError(outputMessage) {
		displayOutputMessage(outputMessage);
		return false;
	},
};

/* -----------------------------------------
	ATM MENU

	- Runs ATM menu loop
	- Displays menu options to user
	- Handles input for menu selection
	- Calls account methods based on menu
	selection
	- Handles input for deposit and withdrawal
	amounts
	- Handles cancelled input
	- Stops loop when user chooses to exit
--------------------------------------------- */

function atm() {
	let isMenuOpen = true;

	while (isMenuOpen) {
		const menuOptions = prompt(
			"********** BANK ACCOUNT **********\n\n" +
				"1. Show account name\n" +
				"2. Show account balance\n" +
				"3. Deposit money\n" +
				"4. Withdraw money\n" +
				"5. Exit account\n\n" +
				"Select an option (1-5): ",
		);

		if (isInputCancelled(menuOptions)) {
			return;
		}

		const userSelection = Number(menuOptions);

		switch (userSelection) {
			case 1: {
				account.getAccountName();
				break;
			}
			case 2: {
				account.getBalance();
				break;
			}
			case 3: {
				const userDeposit = prompt("Enter amount to deposit: ");

				if (isInputCancelled(userDeposit)) {
					continue;
				} else {
					const amountToDeposit = Number(userDeposit);
					account.deposit(amountToDeposit);
					break;
				}
			}
			case 4: {
				const userWithdrawal = prompt("Enter amount to withdraw: ");

				if (isInputCancelled(userWithdrawal)) {
					continue;
				} else {
					const amountToWithdraw = Number(userWithdrawal);
					account.withdrawal(amountToWithdraw);
					break;
				}
			}
			case 5:
				isMenuOpen = false;
				account.exitAccount();
				break;

			default:
				account.accountError("Invalid selection, please try again.");
		}
	}
}

/* -----------------------------------------
	OUTPUT HANDLER
	
	- Displays messages to user
--------------------------------------------- */

function displayOutputMessage(outputMessage) {
	alert(outputMessage);
	console.log(outputMessage);
}

/* -----------------------------------------
	INPUT HANDLER

	- Validates user input from prompt
	- Returns true if cancelled, otherwise 
	return false
--------------------------------------------- */

function isInputCancelled(userInput) {
	if (userInput === null) {
		console.log("Input cancelled.");
		return true;
	} else {
		return false;
	}
}

/* -----------------------------------------
	RUN ATM PROGRAM
--------------------------------------------- */

atm();
