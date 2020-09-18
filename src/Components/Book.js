import React, { Component } from 'react';

class Book extends Component {

    state ={
        value:'',
    }

    componentDidMount() {
        this.setState({
            value:this.props.bookStatus
        })
    }

    changingShelf = (e) => {
        const targetValue = e.target.value;
        const name = e.target.parentNode.parentNode.nextSibling.textContent;
        const author = e.target.parentNode.parentNode.nextSibling.nextSibling.textContent;
        const thumbnail = this.props.bookUrl;
        this.setState({
            value: targetValue
        })

        this.props.movingBook(targetValue, name, author, thumbnail);
    }

    render() {
        console.log(this.props.bookStatus)
        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookUrl})` }}></div>
                        <div className="book-shelf-changer">
                                <select value={this.state.value} onChange={(e) => this.changingShelf(e)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.bookTitle}</div>
                    <div className="book-authors">{this.props.bookAuthor}</div>
                </div>
            </li>
        )
    }
}

export default Book;