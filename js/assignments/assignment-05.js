/* -----------------------------------------
	OBJECT: ACCOUNT

    - Stores account information (name and
    balance)
    - Handles money transactions (deposits 
    and withdrawals)
--------------------------------------------- */

const account = {
	accountName: "Jane Doe", // Name of account holder
	balance: 10000, // Starting value for account balance

	/* -----------------------------------------
	    METHOD: getBalance()

        - Returns current balance
    --------------------------------------------- */

	getBalance() {
		console.log(this.balance);
		return this.balance;
	},
	deposit(amount) {},
	withdrawal(amount) {},

	/* -----------------------------------------
	    METHOD: getAccountName()

        - Returns account name
    --------------------------------------------- */
	getAccountName() {
		console.log(this.accountName);
		return this.accountName;
	},
	exitAccount() {},
	accountError() {},
};

// For testing
account.getBalance();
account.getAccountName();
