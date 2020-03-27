import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { fetchData, normalizeData, API, API_KEY } from "./fetchData";
import Table from "./components/Table";
import "./App.css";

const header = [" ", "Date", "Header", "Link"];

const handlePage = (page) => (page > 0 && page < 6 ? page : 1);

function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("landscapes");
  const [page, setPage] = useState(1);
  const API_URL = `${API}/everything?page=${page}&q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    fetchData(query, page)
      .then((response) => {
        const normalized = normalizeData(response.data);
        setData(normalized.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [page, url]);

  return (
    <div className="App">
      <div className="content center">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Page: {page}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button onClick={() => setPage(handlePage(page - 1))}>
                prev
              </Button>
              <Button onClick={() => setPage(handlePage(page + 1))}>
                next
              </Button>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(event) => setQuery(event.target.value)}
                onKeyPress={(event) =>
                  event.key === "Enter" ? setUrl(API_URL) : null
                }
              />
              <Button
                variant="outline-success"
                onClick={() => {
                  setPage(1);
                  setUrl(API_URL);
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <div className="table-wrapper">
          <Table header={header} body={data.articles} columnSize={3} />
        </div>
        <div style={{ paddingTop: "20px" }}>
          <a href="https://newsapi.org/">Powered By NewsAPI.org</a>
        </div>
      </div>
    </div>
  );
}

export default App;
