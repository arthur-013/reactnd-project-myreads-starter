import React, {Component} from 'react';
import Book from './book'

class Shelf extends Component{
    render(){
        return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books&& this.props.books.map(books=> <Book key={books.id}{...books} moveBook = {this.props.moveBook}/>)}
          </ol>
        </div>
      </div>
      ) 
    }
}
export default Shelf;