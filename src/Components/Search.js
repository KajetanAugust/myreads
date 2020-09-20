import React, { Component } from 'react';
import {Link} from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book";

class Search extends Component {

    state = {
        query:'',
        searchedBooks: [],
    }


    updateQuery= (query)=>{
        if(query===null||query==='')
        {
            this.setState(()=>({query:''}))
            this.setState(()=>({
                searchedBooks:[]
            }))
        }
        else{
            this.setState({ query: query })
            this.findBooks(query)
        }
    }


    findBooks = (query) => {
        BooksAPI.search(query).then((responses) => {
            console.log(responses);
            if (query !== this.state.query) {
                return;
            }
            if (responses.error !== "empty query") {
                let filteredResponses = responses.filter((response) => {
                    return (
                        response.hasOwnProperty("imageLinks") &&
                        response.hasOwnProperty("authors") &&
                        response.imageLinks.hasOwnProperty("thumbnail")
                    );
                });
                console.log("Filtered Responses", filteredResponses);
                if (filteredResponses.length !== 0) {
                    this.setState({ searchedBooks: filteredResponses });
                } else {
                    this.setState(() => ({
                        searchedBooks: [],
                    }));
                }
            } else {
                this.setState(() => ({
                    searchedBooks: [],
                }));
            }
        });
    };

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */
                        }

                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.length > 0
                                ?
                                this.state.searchedBooks.map( book =>
                                    <Book
                                        book={book}
                                        movingBook={this.props.movingBook}
                                    />
                                )
                                :
                                <li>No results</li>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;