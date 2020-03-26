import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./App.css";

const header = [" ", "Date", "Header", "Link"];
function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("landscapes");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        console.error(`Fetch error: ${error}`);
      }
    };
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => setUrl(API_URL)}>
          Search
        </button>
      </div>
      <div className="table-wrapper">
        <Table
          id="data"
          header={header}
          body={data.articles}
          columnSize={3}
        ></Table>
      </div>
    </div>
  );
}

export default App;
