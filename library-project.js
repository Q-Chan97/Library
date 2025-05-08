const myLibrary = [];

function Book (title, author, pages, status) {
    if(!new.target) {
        throw Error("Must use New operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}.`;
    }
};

function addBookToLibrary(title, author, pages, status) {
    const libraryBook = new Book(title, author, pages, status); // Pull constructor properties
    myLibrary.push(libraryBook); // send new Book to our array
    this.id = crypto.randomUUID(); // Creates unique ID on creation of book
}

addBookToLibrary("Eragon", "Christoper Paolini", 509, "read");

console.log(myLibrary);