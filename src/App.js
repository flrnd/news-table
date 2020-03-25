import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const firstRow = [" ", "A", "B", "C"];
const header = [" ", "Date", "Header", "Link"];
function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, [url]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => setUrl(API_URL)}>
          Search
        </button>
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {firstRow.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {header.map((heading, index) => (
                <td key={index}>{heading}</td>
              ))}
            </tr>

            {data.articles.map((article, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{article.publishedAt.split("T")[0]}</td>
                <td>{article.title}</td>
                <td>{article.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
