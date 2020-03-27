import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchData, normalizeData, API, API_KEY } from "./fetchData";
import NewsTable from "./components/Table";
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
      <Container>
        <Row>
          <Col>
            <Navbar expand="sm">
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
                <div>
                  <input
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
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <Row>
          <Col>
            <div className="table-wrapper">
              <NewsTable header={header} body={data.articles} columnSize={3} />
            </div>
            <div style={{ paddingTop: "20px" }}>
              <a href="https://newsapi.org/">Powered By NewsAPI.org</a>
            </div>
          </Col>
          <Col xs lg="2">
            <h2>History</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
