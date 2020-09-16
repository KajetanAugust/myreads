import React, { Component } from 'react';
import Book from "./Book";

class WantToReadBookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.wantToRead.map( book => (
                                <Book
                                    bookUrl={book.url}
                                    bookTitle={book.title}
                                    bookAuthor={book.author}
                                />
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default WantToReadBookshelf;