/* --------------------------------------------
	OBJECT: ACCOUNT

    - accountName: stores account holder name
	- balance: stores current account balance
    - getBalance(): returns account balance

	- deposit(amount): validates and adds
	money to account
	- withdrawal(amount): validates and
	removes money from account

	- getAccountName(): returns account name

	- exitAccount(): 

	- accountError(message): handles invalid
	input
------------------------------------------------ */

const account = {
	accountName: "Jane Doe",
	balance: 10000,
	getBalance() {
		console.log(`Your account balance is: ${this.balance.toFixed(2)}`);
		return this.balance;
	},
	deposit(amount) {
		if (Number.isNaN(amount) || amount <= 0) {
			return this.accountError("Please enter a valid number.");
		} else {
			this.balance += amount;
			console.log(`Transaction completed.\nYour new balance is ${this.balance.toFixed(2)}`);
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
			console.log(`Transaction completed. Your new balance is ${this.balance.toFixed(2)}`);
			return this.balance;
		}
	},
	getAccountName() {
		console.log(`Your account name is: ${this.accountName}`);
		return this.accountName;
	},
	exitAccount() {},
	accountError(message) {
		console.log(message);
		return false;
	},
};

/* -----------------------------------------
	FUNCTION: ATM

	- Displays menu to user
	- Handles user selection
--------------------------------------------- */

function atm() {
	const menuOptions = prompt(
		"********** BANK ACCOUNT **********\n\n1. Show account name\n2. Show account balance\n3. Deposit money\n4. Withdraw money\n5. Exit account\n\nSelect an option (1-5): ",
	);
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

			if (userDeposit === null) {
				console.log("Input cancelled.");
				return;
			} else {
				const amountToDeposit = Number(userDeposit);
				account.deposit(amountToDeposit);
				break;
			}
		}
		case 4: {
			const userWithdrawal = prompt("Enter amount to withdraw: ");

			if (userWithdrawal === null) {
				console.log("Input cancelled.");
				return;
			} else {
				const amountToWithdraw = Number(userWithdrawal);
				account.withdrawal(amountToWithdraw);
				break;
			}
		}
		case 5: {
			account.exitAccount();
			break;
		}
		default: {
			account.accountError("Invalid selection, please try again.");
		}
	}
}

atm();
