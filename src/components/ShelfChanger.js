import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = (props) => {
  const { selectedValue, book, onShelfChange } = props;

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={selectedValue || "none"}
        onChange={(event) => onShelfChange(book, event.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  selectedValue: PropTypes.string,
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ShelfChanger;
