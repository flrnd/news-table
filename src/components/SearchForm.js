import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const SearchForm = ({ onSearchHandler, onInputChange }) => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="#home">N</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <>
          <label>Search news</label>
          <input
            type="text"
            placeholder="Books, Music..."
            className="mr-sm-2"
            onChange={onInputChange}
            onKeyPress={(event) =>
              event.key === "Enter" ? onSearchHandler() : null
            }
          />
          <Button variant="outline-success" onClick={onSearchHandler}>
            Search
          </Button>
        </>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SearchForm;
