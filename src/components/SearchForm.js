import React from "react";
import Button from "react-bootstrap/Button";
import "./SearchForm.css";

const SearchForm = ({ onSearchHandler, onInputChange }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Books, Food..."
        className="mr-sm-2"
        onChange={onInputChange}
        onKeyPress={(event) =>
          event.key === "Enter" ? onSearchHandler() : null
        }
      />
      <Button variant="outline-success" onClick={onSearchHandler}>
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
