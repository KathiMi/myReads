import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchResult = (props) => {
  const { books, onShelfChange } = props;
  return (
    <div className="search-books-results">
      {books !== [] && (
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} onShelfChange={onShelfChange} />
          ))}
        </ol>
      )}
    </div>
  );
};

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default SearchResult;
