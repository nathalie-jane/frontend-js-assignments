/* --------------------------------------------
	OBJECT: ACCOUNT

    - accountName: stores account holder name
	- balance: stores current account balance
    - getBalance(): returns account balance

	- deposit(amount):
	- withdrawal(amount):

	- getAccountName(): returns account name

	- exitAccount(): 

	- accountError(message): handles invalid
	input
------------------------------------------------ */

const account = {
	accountName: "Jane Doe",
	balance: 10000,
	getBalance() {
		console.log(this.balance.toFixed(2));
		return this.balance;
	},
	deposit(amount) {},
	withdrawal(amount) {},
	getAccountName() {
		console.log(this.accountName);
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
			break;
		}
		case 3: {
			break;
		}
		case 4: {
			break;
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
