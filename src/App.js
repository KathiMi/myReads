import React from "react";
import { getAll, update } from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/SearchPage";
import MyReads from "./components/MyReads";

class BooksApp extends React.Component {
  state = {
    booksOnShelves: [],
  };

  componentDidMount() {
    getAll().then((books) => {
      this.setState(() => ({
        booksOnShelves: books,
      }));
    });
  }

  changeShelf = (changingBook, shelf) => {
    this.updateBooksOnShelves(changingBook, shelf);
    update(changingBook, shelf);
  };

  /* 
  Sorry for the mess in the following function - couldn't get head around a better solution.
  Suggestions for improvement are very welcome :)
  */

  updateBooksOnShelves(changingBook, shelf) {
    this.setState((curState) => ({
      booksOnShelves:
        curState.booksOnShelves.filter(
          (bookOnShelves) => bookOnShelves.id === changingBook.id
        ).length > 0
          ? curState.booksOnShelves.map((book) =>
              book.id === changingBook.id ? { ...book, shelf: shelf } : book
            )
          : [...curState.booksOnShelves, { ...changingBook, shelf: shelf }],
    }));
  }

  render() {
    const { booksOnShelves } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyReads
              booksOnShelves={booksOnShelves}
              onShelfChange={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              booksOnShelves={booksOnShelves}
              onShelfChange={this.changeShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
