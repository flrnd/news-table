import React, { useState, useEffect } from "react";
import { fetchData, API, API_KEY } from "./fetchData";
import Table from "./components/Table";
import "./App.css";

const header = [" ", "Date", "Header", "Link"];

function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("landscapes");
  const API_URL = `${API}/everything?q=${query}&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    fetchData(query)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [url]);

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
        <button type="button" onClick={() => setUrl(API_URL)}>
          Search
        </button>
      </div>
      <div className="table-wrapper">
        <Table header={header} body={data.articles} columnSize={3} />
      </div>
    </div>
  );
}

export default App;
