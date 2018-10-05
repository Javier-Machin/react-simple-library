import React, { Component } from 'react';
import storageManager from './modules/storageManager';
import BookNewModal from './components/BookNewModal';
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
        
        <BookNewModal handleBookCreate={this.handleBookCreate} />
        <BookList 
          handleBookDelete={this.handleBookDelete} 
          handleBookReadToggle={this.handleBookReadToggle}
          books={this.state.books} 
        />
      </section>
    );
  }

  handleBookCreate(event, title, author, pages, read) {
    event.preventDefault();
    
    const newBook = {
      title: title, 
      author: author, 
      pages: pages, 
      read: read
    };

    storageManager.addBook(newBook);
    this.setState({books: storageManager.getBooks()});

    document.getElementById("modal-toggle").checked = false;
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