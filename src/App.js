import React, { Component } from 'react';
import BookForm from './components/book-form';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="main-container">
        <BookForm />
      </section>
    );
  }
}

export default App;