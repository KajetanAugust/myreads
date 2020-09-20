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


    movingBook = (value, name, author, thumbnail) => {
        const bookToChange = this.state.allBooks.filter( book => book.title === name);

        if(bookToChange.length > 0) {
            const filteredBooks = this.state.allBooks.filter( book => book.title !== name);
            bookToChange[0].shelf = value;
            const newBooksOrder = [...filteredBooks, ...bookToChange];
            console.log(newBooksOrder)
            this.setState({
                allBooks: newBooksOrder
            })
        } else {
            const bookToAdd = {url: thumbnail, title: name, author: author, shelf: value}
            const books = this.state.allBooks;
            const newBooks= [...books, bookToAdd  ]
            this.setState({
                allBooks: newBooks
            })
        }

  }


  render() {
      console.log(this.state.allBooks)
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
