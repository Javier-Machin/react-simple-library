import React, { Component } from 'react';
import storageManager from './modules/storageManager';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { books: storageManager.getBooks() };

    this.handleBookCreate = this.handleBookCreate.bind(this);
  }

  render() {
    return (
      <section className="main-container">
        <BookForm handleBookCreate={this.handleBookCreate} />
        <BookList books={this.state.books} />
      </section>
    );
  }

  handleBookCreate(title, author, pages, read) {
    return event => {
      event.preventDefault()
      
      const newBook = {
        title: title, 
        author: author, 
        pages: pages, 
        read: read
      };

      console.log(newBook);
      storageManager.addBook(newBook);
      this.setState({books: storageManager.getBooks()});
    } 
  }

}

export default App;