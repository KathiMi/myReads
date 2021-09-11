import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = (props) => {
  const { book, onShelfChange } = props;
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          {book.imageLinks && (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`,
              }}
            />
          )}
          <ShelfChanger
            selectedValue={book.shelf}
            bookId={book.id}
            onShelfChange={onShelfChange}
          />
        </div>
        {book.title && <div className="book-title">{book.title}</div>}
        {book.authors &&
          book.authors.map((author) => (
            <div key={`${book.id}-${author}`} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func,
};

export default Book;
