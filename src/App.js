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
        
        <div className="newbook">
          <input type="checkbox" className="newbook__checkbox" id="navi-toggle" />

          <label htmlFor="navi-toggle" className="newbook__button">
            <span className="newbook__icon">&nbsp;</span>
          </label>

          <div className="newbook__background">&nbsp;</div>

          <nav className="newbook__nav">
            <ul className="newbook__list">
              <BookForm handleBookCreate={this.handleBookCreate} className="newbook__form" />
              <li className="newbook__item"><a href="" className="newbook__link"><span>01</span>About Natours</a></li>
              <li className="newbook__item"><a href="" className="newbook__link"><span>02</span>Your benefits</a></li>
              <li className="newbook__item"><a href="" className="newbook__link"><span>03</span>Popular tours</a></li>
              <li className="newbook__item"><a href="" className="newbook__link"><span>04</span>Stories</a></li>
              <li className="newbook__item"><a href="" className="newbook__link"><span>05</span>Book now</a></li> 
            </ul>
          </nav>
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