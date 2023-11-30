/**
 * Filename: sophisticated_code.js
 * 
 * This code demonstrates a complex implementation of a book management system.
 * It incorporates various advanced JavaScript concepts and design patterns.
 */

// Book class representing a single book
class Book {
  constructor(title, author, publicationYear, genre) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
  }

  getInfo() {
    return `${this.title} by ${this.author}, published in ${this.publicationYear}. Genre: ${this.genre}`;
  }
}

// Library class representing a collection of books
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter(book => book.genre === genre);
  }

  getAllBooks() {
    return this.books.map(book => book.getInfo());
  }
}

// Create sample books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Novel");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
const book3 = new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance");

// Create a library instance
const library = new Library("My Library");

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Find books by author
const booksByAuthor = library.findBooksByAuthor("Harper Lee");
console.log("Books by Harper Lee:");
booksByAuthor.forEach(book => console.log(book.getInfo()));

// Remove a book from the library
library.removeBook("Pride and Prejudice");

// Get all books in the library
console.log("\nAll books in the library:");
const allBooks = library.getAllBooks();
allBooks.forEach(book => console.log(book));

// Output:
// Books by Harper Lee:
// To Kill a Mockingbird by Harper Lee, published in 1960. Genre: Fiction
// 
// All books in the library:
// The Great Gatsby by F. Scott Fitzgerald, published in 1925. Genre: Novel
// To Kill a Mockingbird by Harper Lee, published in 1960. Genre: Fiction