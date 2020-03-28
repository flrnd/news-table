import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchData, normalizeData, API, API_KEY } from "./fetchData";
import { saveStore } from "./store";
import NewsTable from "./components/Table";
import SearchForm from "./components/SearchForm";
import "./App.css";

function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("");
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

  const onSearchHandler = () => {
    setUrl(API_URL);
    saveStore(browseHistory.articles);
  };

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SearchForm
              onSearchHandler={onSearchHandler}
              onInputChange={onInputChange}
            />
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <Row>
          <Col>
            <div className="table-wrapper">
              <NewsTable body={data.articles} columnSize={3} />
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
