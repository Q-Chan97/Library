const myLibrary = [];

function Book (title, author, pages, isRead) {
    if(!new.target) {
        throw Error("Must use New operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`;
    }
};

function addBookToLibrary(title, author, pages, isRead) {
    const libraryBook = new Book(title, author, pages, isRead); // Pull constructor properties
    myLibrary.push(libraryBook); // send new Book to our array
    this.id = crypto.randomUUID(); // Creates unique ID on creation of book
}

addBookToLibrary("Eragon", "Christoper Paolini", 509, true);

console.log(myLibrary);