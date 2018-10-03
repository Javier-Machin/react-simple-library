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
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const { title, author, pages, read } = this.state;
    
    return (
      <form className="newbook__form" onSubmit={
        this.props.handleBookCreate(title, author, pages, read)
      }>
        <label>Title:</label><br />
        <input type="text" 
               name="title" 
               className="newbook__form-input"
               id="form-title" 
               value={this.state.name} 
               onChange={this.handleChange} 
               maxLength="15" /><br />
        
        <label>Author:</label><br />
        <input type="text" 
               name="author"
               className="newbook__form-input" 
               id="form-author" 
               value={this.state.author} 
               onChange={this.handleChange} 
               maxLength="15" /><br />
        
        <label>Pages:</label><br />
        <input type="number" 
               name="pages"
               className="newbook__form-input" 
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

export default BookForm