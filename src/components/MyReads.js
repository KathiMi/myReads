import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const MyReads = (props) => {
  const { booksOnShelves, onShelfChange } = props;
  const currentlyReading = booksOnShelves.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = booksOnShelves.filter(
    (book) => book.shelf === "wantToRead"
  );
  const read = booksOnShelves.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          bookShelfName="Currently Reading"
          books={currentlyReading}
          onShelfChange={onShelfChange}
        />
        <BookShelf
          bookShelfName="Want to Read"
          books={wantToRead}
          onShelfChange={onShelfChange}
        />
        <BookShelf
          bookShelfName="Read"
          books={read}
          onShelfChange={onShelfChange}
        />
      </div>
      <Link to="/search">
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </Link>
    </div>
  );
};

MyReads.propTypes = {
  booksOnShelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default MyReads;
