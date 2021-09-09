import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const SearchResult = (props) => {
  return (
    <div className="search-books-results">
      {props.books !== [] && (
        <ol className="books-grid">
          {props.books.map((book) => (
            <Book book={book} />
          ))}
        </ol>
      )}
    </div>
  );
};

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
};

export default SearchResult;
