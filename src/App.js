import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const header = [" ", "DATE", "HEADING", "URL"];
function App() {
  const [data, setData] = useState({ articles: [] });

  useEffect(() => {
    const fetchData = async () => {
      const KEY = process.env.REACT_APP_API_KEY;
      const result = await axios(
        `http://newsapi.org/v2/everything?q=corona&from=2020-03-24&to=2020-03-28&apiKey=${KEY}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {header.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
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
