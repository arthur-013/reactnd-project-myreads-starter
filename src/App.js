import React from 'react';
import { Switch , Route} from 'react-router-dom';
import Provider, {MyContext} from './Handler';

// import * as BooksAPI from './BooksAPI'
import './App.css'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';


class BooksApp extends React.Component { 
  render() {
    return (
      <div className="app">
        <Provider>
        <Switch>
          <Route exact path = {"/"} 
          render ={
            ()=>(
              <MyContext.Consumer>
                {context =><HomeScreen{...context}/>}
              </MyContext.Consumer>
            )
          
          }/>
            <Route exact path = {"/search"}
             render ={()=>(
              <MyContext.Consumer>
                {context =><SearchScreen{...context}/>}
              </MyContext.Consumer>
            )}/>
        </Switch>
        </Provider >
      </div>
    )
  }
}
export default BooksApp