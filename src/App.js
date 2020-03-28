import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchData, normalizeData, API, API_KEY } from "./fetchData";
import { saveStore, getStore, TODAY } from "./store";
import NewsTable from "./components/Table";
import "./App.css";

const header = [" ", "Date", "Header", "Link"];
const totalSavedHistory = async (day) => {
  const saved = await getStore(day);
  return saved.length;
};

function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("landscapes");
  const [browseHistory, setBrowseHistory] = useState({ articles: [] });
  const API_URL = `${API}/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    fetchData(query)
      .then((response) => {
        const normalized = normalizeData(response.data);
        setData(normalized.data);
        setBrowseHistory(normalized.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [url]);

  const onSearchHandle = () => {
    setUrl(API_URL);
    saveStore(browseHistory.articles);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navbar expand="sm">
              <Navbar.Brand href="#home">News search</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyPress={(event) =>
                      event.key === "Enter" ? onSearchHandle() : null
                    }
                  />
                  <Button variant="outline-success" onClick={onSearchHandle}>
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
            <span>items saved</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
