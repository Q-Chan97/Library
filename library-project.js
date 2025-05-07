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

const eragon = new Book('Eragon', 'Christopher Paolini', 509, 'read');

console.log(eragon.info());
console.log(eragon.id);