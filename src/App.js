import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';


import BooksLists from "./Components/BooksLists";
import Search from "./Components/Search";

class BooksApp extends React.Component {
  state = {
    sections: [
        {name: 'Currently Reading', sectionKey:'currentlyReading'},
        {name: 'Want to read', sectionKey:'wantToRead'},
        {name: 'Read', sectionKey:'read'}
    ],

    allBooks: [],
  }

    componentDidMount() {
        BooksAPI.getAll().then(res => {
            this.setState({
                allBooks: res,
            })
        })
    }


    movingBook = (book, newShelfValue) => {
        BooksAPI.update(book, newShelfValue)
            .then(() => {
                BooksAPI.getAll()
                    .then(res => {
                        this.setState({
                            allBooks: res,
                        })
                    })
        })
  }


  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
                <BooksLists
                    allBooks={this.state.allBooks}
                    sections={this.state.sections}
                    movingBook={this.movingBook}
                />
            )}
        />


        <Route path='/search' render={() => (
          <Search
            movingBook={this.movingBook}
          />
        )} />

      </div>
    )
  }
}

export default BooksApp
