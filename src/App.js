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

    allBooks: [
        {url: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api", title: "To Kill a Mockingbird", author: "Harper Lee", status:"currentlyReading"},
        {url: "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api", title: "Ender's Game", author: "Orson Scott Card", status:"currentlyReading"},
        {url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api", title: 1776, author: "David McCullough", status:"wantToRead" },
        {url: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api", title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", status:"wantToRead" },
        {url: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api", title: "The Hobbit", author: "J.R.R. Tolkien", status:"read" },
        {url: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api", title: "Oh, the Places You'll Go!", author: "Seuss", status:"read" },
        {url: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api", title: "The Adventures of Tom Sawyer", author: "Mark Twain", status:"read" },
    ],
  }


    movingBook = (value, name, author, thumbnail) => {
        const bookToChange = this.state.allBooks.filter( book => book.title === name);

        if(bookToChange.length > 0) {
            const filteredBooks = this.state.allBooks.filter( book => book.title !== name);
            bookToChange[0].status = value;
            const newBooksOrder = [...filteredBooks, ...bookToChange];
            console.log(newBooksOrder)
            this.setState({
                allBooks: newBooksOrder
            })
        } else {
            const bookToAdd = {url: thumbnail, title: name, author: author, status: value}
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
