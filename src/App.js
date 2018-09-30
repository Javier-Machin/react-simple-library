import React, { Component } from 'react';
import BookForm from './components/BookForm';

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