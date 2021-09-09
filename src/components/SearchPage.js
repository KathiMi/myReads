import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchPage extends Component {
  state = {
    books: [],
  };

  updateBooks = (newBooks) => {
    this.setState(() => ({
      books: newBooks,
    }));
  };
  render() {
    const { books } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <SearchBar books={books} updateBooks={this.updateBooks} />
        </div>
        <SearchResult books={books} />
      </div>
    );
  }
}

export default SearchPage;
