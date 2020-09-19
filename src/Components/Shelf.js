import React, { Component } from 'react';
import Book from "./Book";

class Shelf extends Component {
    render() {

        const sectionKey = this.props.sectionKey;
        const books = this.props.books.filter( book => {
            return book.status === sectionKey;
        });

        return (
            <div className="bookshelf" key={this.props.sectionName}>
                <h2 className="bookshelf-title">{this.props.sectionName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books.map( book => (
                                <Book
                                    bookUrl={book.url}
                                    bookTitle={book.title}
                                    bookAuthor={book.author}
                                    bookStatus={book.status}
                                    movingBook={this.props.movingBook}
                                    key={book.title}
                                />
                            ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;