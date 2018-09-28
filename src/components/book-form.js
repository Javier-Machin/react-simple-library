import React, { Component } from 'react';

class BookForm extends Component {

  render() {
    return (
      <form className="book-form">
        <label>Title:</label><br />
        <input type="text" name="title" id="form-title" placeholder="The Book" maxLength="15" /><br />
        <label>Author:</label><br />
        <input type="text" name="author" id="form-author" placeholder="John Smith" maxLength="15" /><br />
        <label>Pages:</label><br />
        <input type="number" name="pages" id="form-pages" placeholder="100" min="1" max="9999" /><br />
        <label>Read:</label><br />
        <input type="radio" id="yes" value="true" name="read" />
        <label htmlFor="yes">Yes</label><br />
        <input type="radio" id="no" value="false" name="read" />
        <label htmlFor="no">No</label><br /><br />
        <BtnSubmitForm />
      </form>
    );
  }
}

class BtnSubmitForm extends Component {
  handleClick() {
    const theGame = new Book("The Game", "Straus", 580, "false");
    books.push(theGame);
    console.log(books[2]);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button className="btn btn-form-submit" type="button" onClick={(e) => this.handleClick(e)}>
        Submit
      </button>
    );
  }
}

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() { this.read === "true" ? this.read = "false" : this.read = "true" }
}

const quixote = new Book("Don Quixote", "Cervantes", 980, "false");
const artOfWar = new Book("The Art of War", "Sun Tzu", 130, "false");
const books = [quixote, artOfWar];


export default BookForm