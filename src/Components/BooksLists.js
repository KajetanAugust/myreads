import React, { Component } from 'react';
import CurrentBookshelf from "./CurrentBookshelf";
import WantToReadBookshelf from "./WantToReadBookshelf";
import ReadBookshelf from "./ReadBookshelf";
import {Link} from "react-router-dom";

class BooksLists extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <CurrentBookshelf
                            currentlyReading={this.props.currentlyReading}
                        />

                        <WantToReadBookshelf
                            wantToRead={this.props.wantToRead}
                        />

                        <ReadBookshelf
                            read={this.props.read}
                        />

                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default BooksLists;