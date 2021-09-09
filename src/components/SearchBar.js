import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "../BooksAPI";

class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  changeSearchQuery = (newSearchQuery) => {
    this.setState(() => ({
      searchQuery: newSearchQuery,
    }));
  };

  searchForBooks(searchQuery) {
    BooksAPI.search(searchQuery).then((result) => {
      !result.error && this.props.updateBooks(result);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      if (searchQuery.length < 3) {
        this.props.updateBooks([]);
      } else {
        this.searchForBooks(searchQuery);
      }
    }
  }

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchQuery}
          onChange={(event) => this.changeSearchQuery(event.target.value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  updateBooks: PropTypes.func.isRequired,
};

export default SearchBar;
