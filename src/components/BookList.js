import React, { Component } from 'react';

class BookList extends Component {

  render() { 
    return (
      <ul>
        { this.props.books.map((book, index) => (
          <li key={book.title}>
            Title: {book.title}&nbsp; 
            Author: {book.author}&nbsp;  
            Pages: {book.pages}&nbsp;   
            Read: {book.read}&nbsp;
            <button onClick={this.props.handleBookDelete(index)}>Delete Book</button> 
          </li> 
          ))}
      </ul>
    );
  }

}

export default BookList