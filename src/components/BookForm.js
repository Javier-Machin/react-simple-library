import React, { Component } from 'react';
import storageManager from '../modules/storageManager';
import BookList from './BookList';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: 10,
      read: "yes",
      books: storageManager.getBooks()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(this.state.books);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const newBook = {
      title: this.state.title, 
      author: this.state.author, 
      pages: this.state.pages, 
      read: this.state.read
    };
    
    storageManager.addBook(newBook);
    this.setState({books: storageManager.getBooks()})
    
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form className="book-form" onSubmit={this.handleSubmit}>
        <label>Title:</label><br />
        <input type="text" 
               name="title" 
               id="form-title" 
               value={this.state.name} 
               onChange={this.handleChange} 
               maxLength="15" /><br />
        
        <label>Author:</label><br />
        <input type="text" 
               name="author" 
               id="form-author" 
               value={this.state.author} 
               onChange={this.handleChange} 
               maxLength="15" /><br />
        
        <label>Pages:</label><br />
        <input type="number" 
               name="pages" 
               id="form-pages" 
               value={this.state.pages} 
               onChange={this.handleChange} 
               min="10" 
               max="9999" /><br />
        
        <label>Read:</label><br />
        
        <input type="radio" 
               id="readYes" 
               value="yes" 
               checked={this.state.read === 'yes'} 
               onChange={this.handleChange} 
               name="read" />
        <label htmlFor="readYes">Yes</label><br />
        
        <input type="radio" 
               id="readNo" 
               value="no" 
               checked={this.state.read === 'no'} 
               onChange={this.handleChange} 
               name="read" />
        <label htmlFor="readNo">No</label><br /><br />
        
        <input type="submit" value="Submit" />
      </form>
      <BookList books={this.state.books} />
      </div>
    );
  }
}

export default BookForm