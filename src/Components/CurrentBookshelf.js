import React, { Component } from 'react';
import Book from "./Book";

class CurrentBookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                            {
                                this.props.currentlyReading.map( book => (
                                    <Book
                                        bookUrl={book.url}
                                        bookTitle={book.title}
                                        bookAuthor={book.author}
                                    />
                                ) )
                            }
                    </ol>
                </div>
            </div>
        )
    }
}

export default CurrentBookshelf;