import React, { Component } from 'react';

class BookList extends Component {

  render() { 
    return (
      <div>
        { this.props.books.map((book, index) => (
          <p key={book.title}>
            Title: {book.title}&nbsp; 
            Author: {book.author}&nbsp;  
            Pages: {book.pages}&nbsp;   
            Read: {book.read}&nbsp;
            <button onClick={this.props.handleBookReadToggle(index)}>Toggle Read</button>
            <button onClick={this.props.handleBookDelete(index)}>Delete Book</button>
          </p> 
          ))}
      </div>
    );
  }

}

export default BookList