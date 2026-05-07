const library = []; // Empty array for storing books

// Create new book object from input and store object in library array
function addBook(title, author) {
	// Book object
	const book = {
		title,
		author,
		isRead: false,
	};

	library.push(book); // Store book in array
}

// Loops through library array and displays properties from each object
function listBooks() {
	library.forEach((book) => {
		console.log(`Title: ${book.title}\nAuthor: ${book.author}\nRead: ${book.isRead}\n`); // For debugging
	});
}

// Searches library array for matching title and updates read status
function markAsRead(title) {
	const targetBook = library.find((book) => {
		return book.title === title;
	});

	if (!targetBook) {
		console.log(`No book with the title "${title}" was found\n`); // Log in console
		return false;
	} else {
		targetBook.isRead = true;
		console.log(`"${title}" marked as read\n`); // Log in console
	}
}

// Call function with arguments (log in console)
addBook("The Metamorphosis", "Franz Kafka");
addBook("Crime and Punishment", "Fyodor Dostoevsky");
addBook("One Hundred Years of Solitude", "Gabriel García Márquez");
addBook("The House of the Spirits", "Isabel Allende");

// Run functions
listBooks();
markAsRead("Crime and Punishment");
listBooks(); // Verify state change
