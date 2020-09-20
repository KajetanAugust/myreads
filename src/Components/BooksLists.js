import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Shelf from "./Shelf";

class BooksLists extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                                this.props.sections.map((section) => (
                                    <Shelf
                                        sectionName={section.name}
                                        sectionKey={section.sectionKey}
                                        books={this.props.allBooks}
                                        movingBook={this.props.movingBook}
                                        key={section.sectionKey}
                                    />
                                ))
                        }
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