const myLibrary = [];

function Book (title, author, pages, isRead) {
    if(!new.target) {
        throw Error("Must use New operator");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID(); // Generates random id for each book
};

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ` (+ this.isRead ? "read" : "not read");
}

function addBookToLibrary(title, author, pages, isRead) {
    const libraryBook = new Book(title, author, pages, isRead); // Pull constructor properties
    myLibrary.push(libraryBook); // send new Book to our array
}

addBookToLibrary("Eragon", "Christoper Paolini", 509, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 234, false);
addBookToLibrary("Garfield At Large", "Jim Davis", 96, true);
addBookToLibrary("Animal Farm", "George Orwell", 92, true);
addBookToLibrary("The Grapes of Wrath", "John Steinbeck", 464, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 206, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);

function displayBook() {
    const cardContainer = document.getElementById("card-container"); // Get card container div
    cardContainer.innerHTML = ""; // Stops the prebuilt books in the array from repeating themselves

    myLibrary.forEach((book) => {
        let card = document.createElement("div"); // Create new book card
        card.classList.add("card"); // Give it the card class
       
        const cardTitle = document.createElement("h2"); // Append all the HTML on the inside of the book card
        cardTitle.textContent = book.title;
        card.appendChild(cardTitle);

        const cardAuthor = document.createElement("p");
        cardAuthor.textContent = `By ${book.author}`;
        card.appendChild(cardAuthor);

        const cardPages = document.createElement("p");
        cardPages.textContent = `${book.pages} pages`;
        card.appendChild(cardPages);

        const cardStatus = document.createElement("p");
        cardStatus.textContent = book.isRead ? "Read" : "Not read";
        card.appendChild(cardStatus);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-button");
        removeBtn.innerText = "Delete book";
        card.appendChild(removeBtn);

        cardContainer.appendChild(card); // Append new card as a child of the card container div
    });
}
myLibrary.forEach((Book) => {
    console.log(Book.id);
});
displayBook();

const bookDialog = document.getElementById("book-dialog");
const newBookBtn = document.getElementById("new-book-button");

newBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value; // Finds all the inputs from the dialog modal
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").checked; // Returns true or false for checkbox

    addBookToLibrary(title, author, pages, status); // Uses inputs as arguments in addBookToLibrary function
    displayBook();
    bookForm.reset(); // Clears form
    bookDialog.close(); // Closes modal
});