import React, { Component } from 'react';
import Book from "./Book";

class ReadBookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.read.map( book => (
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

export default ReadBookshelf;