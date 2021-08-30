import React, {Component} from 'react';
import FloatingActionButton from '../my_components/FloatingActionButton';
import Shelf from '../my_components/shelf';
import {getAll} from '../BooksAPI';

class HomeScreen extends Component{

    async componentDidMount(){
        try{
            const books  = await getAll();
            this.props.addBooks(books); 

        }catch(error){
            console.log(error);
        }
    }
    render(){
        return(<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title = 'Currently reading'books = {this.props.currentlyReading} moveBook ={this.props.moveBook}/>
          <Shelf title = 'Want to read' books = {this.props.wantToRead} moveBook ={this.props.moveBook}/>
          <Shelf title ='Read' books= {this.props.read} moveBook={this.props.moveBook}/>
          
        </div>
        <FloatingActionButton/>
      </div>
      );
    }
}

export default HomeScreen;