import React, { useState, useEffect } from "react";
import fetchData from "./fetchData";
import Table from "./components/Table";
import "./App.css";

const header = [" ", "Date", "Header", "Link"];
function App() {
  const [data, setData] = useState({ articles: [] });
  const [query, setQuery] = useState("landscapes");

  useEffect(() => {
    fetchData(query).then(data => setData(data)).catch(error => console.log(error));
  }, [query]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={() => setQuery(query)}>
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
