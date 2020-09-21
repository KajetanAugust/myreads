import React, { Component } from 'react';


class Book extends Component {
    state = {
        value:''
    }

    componentDidMount() {

        if(!this.props.book.shelf) {
            const alreadyExists = this.props.library.filter(libBook => libBook.id === this.props.book.id);
            if(alreadyExists.length)
                this.setState({
                    value: alreadyExists[0].shelf
                })
            else {
                this.setState({
                    value: 'none'
                })
            }
        } else {
            this.setState({
                value: this.props.book.shelf
            })
        }
    }


    render() {
        return(
            <li key={this.props.book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                                <select value={this.state.value} onChange={(e) => this.props.movingBook(this.props.book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book;