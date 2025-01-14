import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
  state = {
    searchedBooks: [],
  };

  updateBooks = (searchedBooks) => {
    const mergedBooks = this.mergeBooks(
      this.props.booksOnShelves,
      searchedBooks
    );
    this.setState(() => ({
      searchedBooks: mergedBooks,
    }));
  };

  /* For this method I got some inspiration from 
  https://stackoverflow.com/questions/46849286/merge-two-array-of-objects-based-on-a-key 
  :) */

  mergeBooks = (booksOnShelves, searchedBooks) =>
    searchedBooks.map((searchedBook) => ({
      ...booksOnShelves.find(
        (bookOnShelves) => bookOnShelves.id === searchedBook.id && bookOnShelves
      ),
      ...searchedBook,
    }));

  render() {
    const { searchedBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <SearchBar books={searchedBooks} updateBooks={this.updateBooks} />
        </div>
        <SearchResult
          books={searchedBooks}
          onShelfChange={this.props.onShelfChange}
        />
      </div>
    );
  }
}

SearchPage.propTypes = {
  booksOnShelves: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default SearchPage;
