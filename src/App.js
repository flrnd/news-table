import React, { useState, useEffect } from "react";
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
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? setUrl(API_URL) : null
          }
        />
        <button
          type="button"
          onClick={() => {
            setPage(1);
            setUrl(API_URL);
          }}
        >
          Search
        </button>
        <button type="button" onClick={() => setPage(handlePage(page - 1))}>
          previous
        </button>

        <button type="button" onClick={() => setPage(handlePage(page + 1))}>
          next
        </button>
        <div className="pagination">Page: {page}</div>
      </div>
      <div className="table-wrapper">
        <Table header={header} body={data.articles} columnSize={3} />
      </div>
      <div style={{ paddingTop: "20px" }}>
        <a href="https://newsapi.org/">Powered By NewsAPI.org</a>
      </div>
    </div>
  );
}

export default App;
