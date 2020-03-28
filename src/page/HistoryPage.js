import React, { useState } from "react";
import { getAllStored } from "../store";

import Button from "react-bootstrap/Button";

function HistoryPage() {
  const [history, setHistory] = useState({ data: [] });

  const fetchHistory = () => {
    getAllStored().then((item) => {
      setHistory({ data: item });
    });
  };

  return (
    <>
      <h1>Visited</h1>
      <Button onClick={fetchHistory}>fetch</Button>
      <div style={{ paddingTop: "15px" }}>
        <ul>
          {history.data.map((h, i) => (
            <li key={h.key} id={h.key}>
              {h.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HistoryPage;
