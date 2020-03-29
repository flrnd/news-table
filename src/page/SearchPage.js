import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchData, normalizeData, API, API_KEY } from "../fetchData";
import NewsTable from "../components/Table";
import SearchForm from "../components/SearchForm";
import "./SearchPage.css";

function SearchPage() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("");
  const API_URL = `${API}/sources?language=en?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    if (query)
      fetchData(query)
        .then((response) => {
          const normalized = normalizeData(response.data);
          setData(normalized.data);
        })
        .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [url]);

  const onSearchHandler = () => {
    setUrl(API_URL);
  };

  const onInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Row>
        <Col>
          <SearchForm
            onSearchHandler={onSearchHandler}
            onInputChange={onInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="table-wrapper">
            <NewsTable body={data.articles} columnSize={3} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SearchPage;
