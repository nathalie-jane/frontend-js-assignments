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

addBook("The Metamorphosis", "Franz Kafka", true); // Call function with arguments (for debugging)

console.log(library); // Log in console
