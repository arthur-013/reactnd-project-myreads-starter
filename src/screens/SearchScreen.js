import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from '../my_components/book'
import {getAll} from '../BooksAPI';

class SearchScreen extends Component{

  // constructor(){
  //   super();
  //   this.state = {
  //     query: "",
  //     books:[],
      
  //   };
  // }

  
  

  async componentDidMount(){
    try{
        const books  = await getAll();
        this.props.addBooks(books); 

    }catch(error){
        console.log(error);
    }
}

  handleChanges = async e =>{
    try{
      
      const query = e.target.value;
      this.setState({query});
      if(query.trim()){
      
      const searchResults = await search(query);

      if(searchResults.error){
        this.setState({books:[]});
      }else{
        this.setState({books: searchResults})
      }
      console.log(searchResults);
    }else{
      this.setState({books:[]});
    }
      
    }catch(error){
      console.log(error)
    }
  };

  
    render(){
      const [query, setQuery] = useState('');
      const [books, setBooks] = useState([]);

      console.log(query);
        return(<div className="search-books">
        <div className="search-books-bar">
         <Link to = {"/"}> <button className="close-search" >Close</button></Link>
          <div className="search-books-input-wrapper">
            
            <input type="text" placeholder="Search by title or author" onChange = {this.handleChanges} value = {this.state.query}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length> 0 && this.state.books.map(book =>{
              const foundShelf = this.props.books.find(
                searchBook => searchBook.id ===book.id
              );
                if(foundShelf){
                  book.shelf = foundShelf.shelf;

                }else{
                  book.shelf = "none";
                }

              
              console.log(foundShelf);
              return(<Book key ={book.id}{...book} moveBooks= {this.props.moveBooks}/>)

            })}

            {this.state.books.length === 0 && (<h1 style={{textAlign: "center"}}>No results found</h1>)}

          </ol>
        </div>
      </div>);
    }
}
export default SearchScreen;