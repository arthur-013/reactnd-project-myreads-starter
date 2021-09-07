import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from '../my_components/book';

class BookList extends Component{
    render(){
        let { 
            handleSearchChange: handleChanges,
            searchResults,
            searchError,
            searchQuery,
            handleReadingChange,
            currentlyReading,
            wantToRead,
            read
        } = this.props
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value={searchQuery}
                  onChange={(e)=>{
                    handleChanges(e);
                  }}
                />

              </div>
            </div>
            <div className="search-books-results">
            {searchQuery!=='' &&
                <ol className="books-grid">
                    {!searchError && searchResults ?
                        searchResults.map(((book, i)=>{
                            return(
                                book.title&&
                                <li key={i}>
                                    <Book 
                                        handleReadingChange={handleReadingChange}
                                        book = {book}
                                        currentlyReading={currentlyReading}
                                        wantToRead={wantToRead}
                                        read={read}
                                        index={i}
                                    />
                                </li>
                                
                            )
                        }))


                    :
                    <p>No Results Found...</p>}
                </ol>
            }
            {searchQuery==='' && <div className='text-align'>Please Enter a title or Author</div>}
            </div>
          </div>
        )
    }
}

export default BookList;