import React, { Component } from 'react';
// import storageManager from '../modules/storageManager';

class BookList extends Component {
  render() {
    return (
      <ul>
        { this.props.books.map(book => (
          <li key={book.title + " " + book.author}>
            Title: {book.title}&nbsp; 
            Author: {book.author}&nbsp;  
            Pages: {book.pages}&nbsp;   
            Read: {book.read}&nbsp; 
          </li> 
          ))}
      </ul>
    );
  }
}

export default BookList