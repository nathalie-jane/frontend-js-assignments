const library = []; // Empty array for storing books

// Create new book object from input and store object in library array
function addBook(title, author, isRead) {
	// Book object
	const newBook = {
		title,
		author,
		isRead,
	};

	library.push(newBook); // Store book in array
}

// Loops through library array and displays properties from each object
function listBooks() {
	library.forEach((currentBook) => {
		console.log(`Title: ${currentBook.title}\nAuthor: ${currentBook.author}\nRead: ${currentBook.isRead}\n`);
	});
}

// Call function with arguments (for debugging)
addBook("The Metamorphosis", "Franz Kafka", true);
addBook("Crime and Punishment", "Fyodor Dostoevsky", true);
addBook("One Hundred Years of Solitude", "Gabriel García Márquez.", false);
addBook("The House of the Spirits", "Isabel Allende", true);

listBooks(); // Run function
