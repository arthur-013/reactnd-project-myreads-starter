import React, {Component} from 'react';
import Shelf from '../my_components/shelf';
import FloatingActionButton from '../my_components/FloatingActionButton';

class HomeScreen extends Component{
    render(){
        let { 
          handleReadingChange,
          currentlyReading,
          wantToRead,
          read 
        
        } = this.props
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <Shelf
                    handleReadingChange={handleReadingChange}
                    status={currentlyReading}
                    statusTitle={'Currently Reading'}
                  />
                  <Shelf 
                    handleReadingChange={handleReadingChange}
                    status={wantToRead}
                    statusTitle={'Want to Read'}
                  />
                  <Shelf 
                    handleReadingChange={handleReadingChange}
                    status={read}
                    statusTitle={'Read'}
                  />
                </div>
              </div>
            </div>
            <div>
              <FloatingActionButton/>
            </div>
          </div>
        )
    }
}

export default HomeScreen;