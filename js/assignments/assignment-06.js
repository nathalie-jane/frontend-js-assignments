let library = []; // Empty array for storing books

// Prompts user for book title and author, creates a book object, and stores it in the library array.
function addBook() {
	const bookTitle = prompt(`Enter a book title: `);

	if (!bookTitle) {
		return;
	}

	const bookAuthor = prompt(`Enter the author of the book: `);

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

// Loops through library array and lists all book titles and authors in the library.
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

// Searches library array for matching title and updates read status
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

// Loops through library array and lists all unread books with their titles and authors
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

// Searches library array for matching title and removes the book from the library
// Updates the library array with a new array that excludes the removed book
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

// Displays output message in an alert and logs the message to the console
function displayOutputMessage(output) {
	alert(output);
	console.log(output); // Used for verifying input
}

// Main function to operate the library menu and handle user selections
function operateLibraryMenu() {
	let isMenuOpen = true;

	while (isMenuOpen) {
		const menuOptions = prompt(
			"********** BOOK TRACKER **********\n\n" +
				"1. Add book\n" +
				"2. List books\n" +
				"3. Mark book as read\n" +
				"4. List unread books\n" +
				"5. Remove book\n" +
				"6. Exit\n\n" +
				"Select an option (1-6): ",
		);

		switch (menuOptions) {
			case 1:
				addBook();
				break;
			case 2:
				listBooks();
				break;
			case 3:
				const targetBookTitle = prompt("Enter book title to mark as read: ");
				markAsRead(targetBookTitle);
				break;
			case 4:
				listUnreadBooks();
				break;
			case 5:
				const targetBookToRemove = prompt("Enter book title to remove: ");
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

operateLibraryMenu();
