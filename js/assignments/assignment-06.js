/* =======================================================
    LESSON 06: PRACTICE

    ASSIGNMENT: BOOK TRACKER

	A simple book tracking application that allows the
	user to add, list, update and remove books through a
	prompt-based menu system.
========================================================== */

/* -----------------------------------------
	LIBRARY ARRAY

	Used for storing all book objects created
	while the program is running
--------------------------------------------- */

let library = [];

/* -----------------------------------------
	FUNCTION: ADD BOOK

	- Prompt user to enter book title
	- Validate title input
	- If title input is valid, then prompt
	  user to enter book author
	- Validate author input
	- If author input is valid, then add book
	  object to library array
--------------------------------------------- */

function addBook() {
	const bookTitle = handleTextInput("Enter a book title: ");

	if (!bookTitle) {
		return;
	}

	const bookAuthor = handleTextInput("Enter the author of the book: ");

	if (!bookAuthor) {
		return;
	}

	const book = {
		title: bookTitle,
		author: bookAuthor,
		isRead: false,
	};

	library.push(book);
}

/* -----------------------------------------
	FUNCTION: LIST BOOKS

	- Create empty string for storing
	  formatted book list
	- Loop through each book in the library array
	- Check read status of each book (read or 
	  unread)
	- Add book title, author and read status
	  to the empty string for output
	- Display complete book list to user
--------------------------------------------- */

function listBooks() {
	let bookList = "";

	library.forEach((book) => {
		if (!book.isRead) {
			bookList += `"${book.title}" by ${book.author} (Unread)\n\n`;
		} else {
			bookList += `"${book.title}" by ${book.author} (Read)\n\n`;
		}
	});

	displayOutputMessage(bookList);
}

/* -----------------------------------------
	FUNCTION: MARK AS READ

	- Search library array for book with
	  matching title
	- Check if book title exists in library
	  array
	- Check if book has not already been
	  marked as read
	- If book title exists and is not marked as
	  read, then update read status for 
	  matching book
--------------------------------------------- */

function markAsRead(title) {
	const targetBook = library.find((book) => {
		return book.title === title;
	});

	if (!targetBook) {
		displayOutputMessage(`No book with the title "${title}" was found.`);
		return false;
	} else if (targetBook.isRead) {
		displayOutputMessage(`"${title}" is already marked as read.`);
		return false;
	} else {
		targetBook.isRead = true;
		displayOutputMessage(`"${title}" is now marked as read.`);
	}
}

/* -----------------------------------------
	FUNCTION: LIST UNREAD BOOKS

	- Filter library array to retrieve unread
	  books only
	- Check if unread books exists
	- If unread book(s) exists, then create 
	  empty string for storing unread book list
	- Loop through each unread book and add
	  book title and author to the empty string
	  for output
	- Display complete list of unread books
	  to user
--------------------------------------------- */

function listUnreadBooks() {
	const unreadBooks = library.filter((book) => {
		return book.isRead === false;
	});

	if (unreadBooks.length === 0) {
		displayOutputMessage("All books in the library have been read.");
		return;
	}

	let unreadBookList = "";

	unreadBooks.forEach((book) => {
		unreadBookList += `"${book.title}" by ${book.author}\n\n`;
	});

	displayOutputMessage(unreadBookList);
}

/* -----------------------------------------
	FUNCTION: REMOVE BOOK

	- Create a new array that excludes
	  matching book title for the removed book
	- Compare length of new array with length 
	  of library array to check if book was 
	  found and removed
	- If matching book title is found, then 
	  replace original library array with the
	  updated array
--------------------------------------------- */

function removeBook(title) {
	const updatedLibrary = library.filter((book) => {
		return book.title !== title;
	});

	if (updatedLibrary.length === library.length) {
		displayOutputMessage(`No book with the title "${title}" was found.`);
		return;
	}

	displayOutputMessage(`"${title}" has been removed from the library.`);
	library = updatedLibrary;
}

/* -----------------------------------------
	FUNCTION: DISPLAY OUTPUT MESSAGE

	- Display output messages via alert and
	  in the console
--------------------------------------------- */

function displayOutputMessage(output) {
	alert(output);
	console.log(output);
}

/* -----------------------------------------
	FUNCTION: IS INPUT CANCELLED

	- Check if user cancelled prompt input
	  (input value = null)
	- Return true if input was cancelled,
	  otherwise false
	- Log cancellation message in console
--------------------------------------------- */

function isInputCancelled(userInput) {
	if (userInput === null) {
		console.log("Input cancelled.");
		return true;
	}
	return false;
}

/* -----------------------------------------
	FUNCTION: HANDLE MENU INPUT

	- Prompt user to enter a menu selection
	- Check if prompt input was cancelled
	- If not cancelled, then remove unnecessary
	  whitespace from user input
	- Validate that input is not empty
	- If not empty, then convert formatted
	  input into a number
	- Validate that converted value is a valid
	  number (1-6)
	- If number is valid, continue with menu
	  selection
--------------------------------------------- */

function handleMenuInput(message) {
	const userInput = prompt(message);

	if (isInputCancelled(userInput)) {
		return null;
	}

	let formattedInput = userInput.trim();

	if (formattedInput === "") {
		displayOutputMessage("Invalid input. Please try again.");
		return;
	}

	formattedInput = Number(userInput.trim());

	if (Number.isNaN(formattedInput)) {
		displayOutputMessage("Please enter a valid number.");
		return;
	}

	return formattedInput;
}

/* -----------------------------------------
	FUNCTION: HANDLE TEXT INPUT

	- Check if prompt input was cancelled
	- If not cancelled, then remove unnecessary
	  whitespace from user input
	- Validate that input is not empty
	- If not empty, then return validated input
--------------------------------------------- */

function handleTextInput(message) {
	const userInput = prompt(message);

	if (isInputCancelled(userInput)) {
		return;
	}

	const formattedInput = userInput.trim();

	if (formattedInput === "") {
		displayOutputMessage("Invalid input. Please try again.");
		return;
	}

	return formattedInput;
}

/* -----------------------------------------
	FUNCTION: IS LIBRARY EMPTY

	- Check if library array is empty
--------------------------------------------- */

function isLibraryEmpty() {
	if (library.length === 0) {
		displayOutputMessage("The library is currently empty. Please add a book to the library first.");
		return true;
	}
	return false;
}

/* -----------------------------------------
	FUNCTION: OPERATE LIBRARY MENU

	- Start main menu loop for Book Tracker
	  program
	- Display menu options and prompt user
	  to make a selection
	- If input is cancelled, then exit loop
	- If not cancelled, then retrieve and 
	  validate user input
	- If valid, continue with selected menu
	  option
	- Validate before running certain functions
	- Return to menu after each completed action
	- Stop loop when user selects the exit option
--------------------------------------------- */

function operateLibraryMenu() {
	let isMenuOpen = true;

	while (isMenuOpen) {
		const menuOptions = handleMenuInput(
			"********** BOOK TRACKER **********\n\n" +
				"1. Add book\n" +
				"2. List books\n" +
				"3. Mark book as read\n" +
				"4. List unread books\n" +
				"5. Remove book\n" +
				"6. Exit\n\n" +
				"Select an option (1-6): ",
		);

		if (menuOptions === null) {
			isMenuOpen = false;
			continue;
		}

		if (menuOptions === undefined) {
			continue;
		}

		switch (menuOptions) {
			case 1:
				addBook();
				break;
			case 2:
				if (isLibraryEmpty()) {
					continue;
				}

				listBooks();
				break;
			case 3:
				if (isLibraryEmpty()) {
					continue;
				}

				const targetBookTitle = handleTextInput("Enter book title to mark as read: ");

				if (!targetBookTitle) {
					continue;
				}

				markAsRead(targetBookTitle);
				break;
			case 4:
				if (isLibraryEmpty()) {
					continue;
				}

				listUnreadBooks();
				break;
			case 5:
				if (isLibraryEmpty()) {
					continue;
				}

				const targetBookToRemove = handleTextInput("Enter book title to remove: ");

				if (!targetBookToRemove) {
					continue;
				}

				removeBook(targetBookToRemove);
				break;
			case 6:
				displayOutputMessage("You have exited the Book Tracker program.");
				isMenuOpen = false;
				break;
			default:
				displayOutputMessage("Invalid selection, please try again.");
		}
	}
}

/* -----------------------------------------
	RUN APPLICATION

	Start the Book Tracker application
--------------------------------------------- */

operateLibraryMenu();
