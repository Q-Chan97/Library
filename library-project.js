const myLibrary = [];

function Book (title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}.`;
    }

    this.id = crypto.randomUUID();
};

function addBookToLibrary(title, author, pages, status) {
    const libraryBook = new Book(title, author, pages, status); // Pull constructor properties
    myLibrary.push(libraryBook); // send new Book to our array
}

addBookToLibrary("Eragon", "Christoper Paolini", 509, "read");

console.log(myLibrary);