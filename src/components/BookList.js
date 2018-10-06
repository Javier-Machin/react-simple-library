import React, { Component } from 'react';

class BookList extends Component {

  render() { 
    return (
      this.props.books.map((book, index) => { 
        return (
        // <React.Fragment key={book.title}>
        <div className="book-list__book-container" key={book.title}>
          <span className="book-list__book-item book-list__book-item--title">{book.title}</span>
          <span className="book-list__book-item book-list__book-item--author">{book.author}</span>
          <span className="book-list__book-item">pages: {book.pages}</span>
          <span className="book-list__book-item">read: {book.read}</span>
          <button 
            className="book-list__book-item book-list__btn" 
            onClick={this.props.handleBookReadToggle(index)}>
            Toggle Read
          </button>
          <button 
            className="book-list__book-item book-list__btn book-list__btn--delete" 
            onClick={this.props.handleBookDelete(index)}>
            &#128465;
          </button>
        </div>
        // </React.Fragment>
        )      
      })
       
    )
  }
}

export default BookList