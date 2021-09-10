import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BookShelf = (props) => {
  const { bookShelfName } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfName}</h2>
      <div className="bookshelf-books">
        {props.books.length > 0 ? (
          <ol className="books-grid">
            {props.books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </ol>
        ) : (
          <div>Currently there are no books on this shelf</div>
        )}
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  bookShelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookShelf;
