import React, {Component} from 'react';
import {update} from '../BooksAPI';


class Book extends Component{

  constructor(props){
    super(props)
    this.state ={
      shelf: this.props.shelf,
    
    }
  }

  handleChanges = async (e) =>{
    try{
      const shelf =e.target.value
      const book = this.props;
      const result = await update(book,shelf);
      this.setState({shelf: this.state.shelf});
      // this.props.shelf = e.target.value
      // this.props.moveBook(book, shelf);

      console.log(result);
    }catch(error){
      console.log(error);
    }
    
  }

      
    render(){

      const {shelf} = this.state;
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ 
                    width: 128,
                     height: 193,
                      backgroundImage: `url(${this.props.imageLinks? this.props.imageLinks.thumbnail: ""})`
                      
                      }}>
                      
                  </div>
                  <div className="book-shelf-changer">
                    <select onChange ={this.handleChanges}value = {shelf}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors? this.props.authors: "No authors"}</div>
              </div>
            </li>
        )
    }
  }
export default Book;