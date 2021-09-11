import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { getAll, update } from "../BooksAPI";

class MyReads extends Component {
  state = {
    booksInMyReads: [],
  };

  componentDidMount() {
    getAll().then((bookList) => {
      this.setState(() => ({
        booksInMyReads: bookList,
      }));
    });
  }

  onShelfChange = (bookId, shelf) => {
    const { booksInMyReads } = this.state;
    this.setState(() => ({
      booksInMyReads: booksInMyReads.map((book) =>
        book.id === bookId ? { ...book, shelf: shelf } : book
      ),
    }));
    update(booksInMyReads.find((book) => book.id === bookId), shelf);
  };

  render() {
    const { booksInMyReads } = this.state;
    const currentlyReading = booksInMyReads.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const wantToRead = booksInMyReads.filter(
      (book) => book.shelf === "wantToRead"
    );
    const read = booksInMyReads.filter((book) => book.shelf === "read");

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            bookShelfName="Currently Reading"
            books={currentlyReading}
            onShelfChange={this.onShelfChange}
          />
          <BookShelf
            bookShelfName="Want to Read"
            books={wantToRead}
            onShelfChange={this.onShelfChange}
          />
          <BookShelf
            bookShelfName="Read"
            books={read}
            onShelfChange={this.onShelfChange}
          />
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
