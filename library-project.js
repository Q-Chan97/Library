const myLibrary = [];

function Book (title, author, pages, isRead) {
    if(!new.target) {
        throw Error("Must use New operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ` (+ this.isRead ? "read" : "not read");
}

function addBookToLibrary(title, author, pages, isRead) {
    const libraryBook = new Book(title, author, pages, isRead); // Pull constructor properties
    myLibrary.push(libraryBook); // send new Book to our array
    this.id = crypto.randomUUID(); // Creates unique ID on creation of book
}

addBookToLibrary("Eragon", "Christoper Paolini", 509, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 234, false);
addBookToLibrary("Garfield At Large", "Jim Davis", 96, true);
addBookToLibrary("Animal Farm", "George Orwell", 92, true);
addBookToLibrary("The Grapes of Wrath", "John Steinbeck", 464, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 206, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);