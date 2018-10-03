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
    this.handleBookDelete = this.handleBookDelete.bind(this);
    this.handleBookReadToggle = this.handleBookReadToggle.bind(this);
  }

  render() {
    return (
      <section className="main-container">
        <BookForm handleBookCreate={this.handleBookCreate} className="newbook__form" />
        <div className="newbook">
          <input type="checkbox" className="newbook__checkbox" id="navi-toggle" />

          <label htmlFor="navi-toggle" className="newbook__button">
            <span className="newbook__icon">&nbsp;</span>
          </label>

          <div className="newbook__background">&nbsp;</div>
        </div>
        <BookList 
          handleBookDelete={this.handleBookDelete} 
          handleBookReadToggle={this.handleBookReadToggle}
          books={this.state.books} 
        />
      </section>
    );
  }

  handleBookCreate(title, author, pages, read) {
    return event => {
      event.preventDefault();
      
      const newBook = {
        title: title, 
        author: author, 
        pages: pages, 
        read: read
      };

      storageManager.addBook(newBook);
      this.setState({books: storageManager.getBooks()});
    } 
  }

  handleBookDelete(index) {
    return () => {
      storageManager.deleteBook(index);
      this.setState({books: storageManager.getBooks()});
    }
  }

  handleBookReadToggle(index) {
    return () => {
      storageManager.toggleReadBook(index);
      this.setState({books: storageManager.getBooks()});
    }
  }

}

export default App;