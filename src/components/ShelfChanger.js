import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = (props) => {
  const { selectedValue, bookId, onShelfChange } = props;

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={selectedValue || "none"}
        onChange={(event) => onShelfChange(bookId, event.target.value)}
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
  bookId: PropTypes.string.isRequired,
  onShelfChange: PropTypes.func,
};

export default ShelfChanger;
