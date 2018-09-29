import React, { Component } from 'react';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: 10,
      read: "yes"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    const newBook = new Book(
      this.state.title, 
      this.state.author, 
      this.state.pages, 
      this.state.read
    );
    
    const books = [newBook];
    
    alert(
      `
       Title: ${books[0].title} 
       Author: ${books[0].author} 
       Pages: ${books[0].pages} 
       Read: ${books[0].read}
      ` 
    );
    
    event.preventDefault();
  }

  render() {
    return (
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
    );
  }
}

// Transform to component ?
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() { this.read === "true" ? this.read = "false" : this.read = "true" }
}


export default BookForm