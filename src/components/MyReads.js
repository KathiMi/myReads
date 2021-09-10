import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";

class MyReads extends Component {
  state = {
    currentlyReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
  };

  componentDidMount() {
    getAll().then((result) => {
      this.setState(() => ({
        currentlyReadingBooks: result.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        wantToReadBooks: result.filter((book) => book.shelf === "wantToRead"),
        readBooks: result.filter((book) => book.shelf === "read"),
      }));
    });
  }

  render() {
    const { currentlyReadingBooks, wantToReadBooks, readBooks } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            bookShelfName="Currently Reading"
            books={currentlyReadingBooks}
          />
          <BookShelf bookShelfName="Want to Read" books={wantToReadBooks} />
          <BookShelf bookShelfName="Read" books={readBooks} />
        </div>
        <Link to="/search">
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    );
  }
}

export default MyReads;
